'use client';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { useEffect, useState, useMemo } from 'react';
import { Loader2, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Submission {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submittedAt?: Timestamp; // Keep the original timestamp for filtering
    formattedSubmittedAt: string; // For display
    source: string;
}

export default function ContactsAdminPage() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);

    // Filter states
    const [nameFilter, setNameFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sourceFilter, setSourceFilter] = useState('all');

    useEffect(() => {
        async function getContactSubmissions() {
            try {
                const contactsCollection = collection(db, 'contactSubmissions');
                const q = query(contactsCollection, orderBy("submittedAt", "desc"));
                const contactsSnapshot = await getDocs(q);
                
                const contactsData = contactsSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const submittedAtTimestamp = data.submittedAt as Timestamp | undefined;

                    let formattedDate = "Date not available";
                    if (submittedAtTimestamp && typeof submittedAtTimestamp.toDate === 'function') {
                        try {
                            formattedDate = format(submittedAtTimestamp.toDate(), "PPP p");
                        } catch (error) {
                            console.error(`Error formatting date for doc ${doc.id}:`, error);
                            formattedDate = "Invalid Date";
                        }
                    } else if (data.submittedAt) {
                        formattedDate = "Invalid Date Format";
                    }

                    return {
                        id: doc.id,
                        name: data.name || 'N/A',
                        email: data.email || 'N/A',
                        phone: data.phone || 'N/A',
                        message: data.message || '',
                        submittedAt: submittedAtTimestamp,
                        formattedSubmittedAt: formattedDate,
                        source: data.source || 'Unknown',
                    } as Submission;
                });
                
                setSubmissions(contactsData);
            } catch (error) {
                console.error("Error fetching contact submissions:", error);
            } finally {
                setLoading(false);
            }
        }
        
        getContactSubmissions();
    }, []);

    const uniqueSources = useMemo(() => {
        const sources = new Set(submissions.map(s => s.source));
        return ['all', ...Array.from(sources)];
    }, [submissions]);

    const filteredSubmissions = useMemo(() => {
        return submissions.filter(submission => {
            const nameMatch = nameFilter ? submission.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;
            const sourceMatch = sourceFilter !== 'all' ? submission.source === sourceFilter : true;
            
            let dateMatch = true;
            if (submission.submittedAt) {
                const submissionDate = submission.submittedAt.toDate();
                if (startDate && new Date(submissionDate) < new Date(startDate)) {
                    dateMatch = false;
                }
                if (endDate) {
                    const end = new Date(endDate);
                    end.setHours(23, 59, 59, 999);
                    if (new Date(submissionDate) > end) {
                        dateMatch = false;
                    }
                }
            } else if (startDate || endDate) {
                dateMatch = false; // Don't show items without a date if filtering by date
            }

            return nameMatch && sourceMatch && dateMatch;
        });
    }, [submissions, nameFilter, startDate, endDate, sourceFilter]);

    const clearFilters = () => {
        setNameFilter('');
        setStartDate('');
        setEndDate('');
        setSourceFilter('all');
    }

  if (loading) {
      return (
          <div className="flex h-[80vh] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
          </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-primary">Contact Submissions</h1>
        <p className="text-muted-foreground mt-2">Here are the messages submitted through your contact form.</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
            <CardTitle>Filter Submissions</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
                <Label htmlFor="name-filter">Name</Label>
                <Input id="name-filter" placeholder="Filter by name..." value={nameFilter} onChange={e => setNameFilter(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="source-filter">Source</Label>
                <Select value={sourceFilter} onValueChange={setSourceFilter}>
                    <SelectTrigger id="source-filter">
                        <SelectValue placeholder="Filter by source..." />
                    </SelectTrigger>
                    <SelectContent>
                        {uniqueSources.map(source => (
                            <SelectItem key={source} value={source}>{source === 'all' ? 'All Sources' : source}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-end">
                <Button onClick={clearFilters} variant="outline" className="w-full">
                    <X className="mr-2 h-4 w-4" /> Clear Filters
                </Button>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Received Messages</CardTitle>
          <CardDescription>Showing {filteredSubmissions.length} of {submissions.length} messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Date</TableHead>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Email & Phone</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="whitespace-nowrap">{submission.formattedSubmittedAt}</TableCell>
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>
                          <div>{submission.email}</div>
                          <div className="text-muted-foreground text-xs">{submission.phone}</div>
                      </TableCell>
                      <TableCell>{submission.source}</TableCell>
                      <TableCell className="min-w-[300px] whitespace-pre-wrap">{submission.message}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No messages match your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
