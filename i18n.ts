import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from './navigation';

// Using static imports is more robust in some build environments.
import en from './messages/en.json';
import es from './messages/es.json';
import fr from './messages/fr.json';
import it from './messages/it.json';
import sq from './messages/sq.json';

const messages = {
  en,
  es,
  fr,
  it,
  sq
};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid.
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: messages[locale as keyof typeof messages]
  };
});