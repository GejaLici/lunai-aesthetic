
'use client';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface Submission {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submittedAt: string;
}

export default function ContactsAdminPage() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);

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
                        // Fallback for cases where it might not be a Timestamp object, though unlikely
                        formattedDate = "Invalid Date Format";
                    }

                    return {
                        id: doc.id,
                        name: data.name || 'N/A',
                        email: data.email || 'N/A',
                        phone: data.phone || 'N/A',
                        message: data.message || '',
                        submittedAt: formattedDate,
                    };
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

      <Card>
        <CardHeader>
          <CardTitle>Received Messages</CardTitle>
          <CardDescription>You have received {submissions.length} messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Date</TableHead>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Email & Phone</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="whitespace-nowrap">{submission.submittedAt}</TableCell>
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>
                          <div>{submission.email}</div>
                          <div className="text-muted-foreground text-xs">{submission.phone}</div>
                      </TableCell>
                      <TableCell className="min-w-[300px] whitespace-pre-wrap">{submission.message}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                      No messages yet.
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
