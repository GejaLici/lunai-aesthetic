
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // The middleware is responsible for validating the locale, so this is the
  // simplest and most robust way to configure the message loading.
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
