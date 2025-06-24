
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'it', 'sq'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  let messages;
  try {
    // The path needs to go up one level from `src` to the root `messages` directory.
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    // This will now catch if the file doesn't exist for a valid locale
    // and show a 404 page, which is better than crashing the server.
    notFound();
  }
 
  return {
    messages
  };
});
