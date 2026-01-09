
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

export const revalidate = 0; // Ensure data is fetched on every request

async function getContactSubmissions() {
  try {
    const contactsCollection = collection(db, 'contactSubmissions');
    const q = query(contactsCollection, orderBy("submittedAt", "desc"));
    const contactsSnapshot = await getDocs(q);
    
    const contacts = contactsSnapshot.docs.map(doc => {
        const data = doc.data();
        const submittedAt = data.submittedAt?.toDate();
        return {
            id: doc.id,
            name: data.name,
            email: data.email,
            phone: data.phone || 'N/A',
            message: data.message,
            submittedAt: submittedAt ? format(submittedAt, "PPP p") : 'Date not available',
        }
    });
    return contacts;
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return [];
  }
}


export default async function ContactsAdminPage() {
  const submissions = await getContactSubmissions();

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Date</TableHead>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Email & Phone</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.length > 0 ? (
                submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.submittedAt}</TableCell>
                    <TableCell className="font-medium">{submission.name}</TableCell>
                    <TableCell>
                        <div>{submission.email}</div>
                        <div className="text-muted-foreground text-xs">{submission.phone}</div>
                    </TableCell>
                    <TableCell className="max-w-md whitespace-pre-wrap">{submission.message}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}
