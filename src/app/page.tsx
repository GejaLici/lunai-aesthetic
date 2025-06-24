
import { redirect } from 'next/navigation';

// This component is a placeholder to redirect to the default locale's home page.
export default function RootPage() {
  redirect('/en');
}
