
import { redirect } from 'next/navigation';

// This component is a placeholder to redirect to the default locale.
export default function ServiceDetailRedirectPage({ params }: { params: { serviceId: string } }) {
  redirect(`/en/services/${params.serviceId}`);
}
