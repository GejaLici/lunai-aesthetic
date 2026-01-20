'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookText, MessageSquare } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-primary">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your website's content and view submissions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookText className="h-6 w-6 text-accent" />
              Manage Blog Posts
            </CardTitle>
            <CardDescription>
              Create, edit, and delete blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/blog">Go to Blog Posts</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              View Contact Submissions
            </CardTitle>
            <CardDescription>
              Read messages sent through your contact form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/contacts">View Contacts</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
