
import { redirect } from 'next-intl/navigation';

// This component is a placeholder to redirect to the default locale.
export default function ServiceDetailRedirectPage({ params }: { params: { serviceId: string } }) {
  redirect(`/services/${params.serviceId}`);
}
