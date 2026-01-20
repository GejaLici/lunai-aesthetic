
'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';
import Link from 'next/link';

const auth = getAuth(app);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <header className="sticky top-16 md:top-0 z-40 w-full border-b bg-background shadow-sm">
        <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
                 <Link href="/admin" className="font-bold text-primary">Admin Dashboard</Link>
                 <Link href="/admin/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
                 <Link href="/admin/contacts" className="text-sm text-muted-foreground hover:text-foreground">Contacts</Link>
            </div>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>
      <main className="mt-4">{children}</main>
    </div>
  );
}
