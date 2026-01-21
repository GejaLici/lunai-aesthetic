import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { locale: string; slug: string } }
) {
  const { locale, slug } = params;
  if (!locale || !slug) {
    return new NextResponse('Bad Request: locale and slug are required', { status: 400 });
  }

  const getFileContent = async (l: string, s: string) => {
    // Construct the path to the HTML file
    const filePath = path.join(process.cwd(), 'messages', 'services', l, `${s}.html`);
    try {
      // Read the file content
      const content = await fs.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      // Return null if the file doesn't exist
      return null;
    }
  };

  // Attempt to get the content for the requested locale
  let content = await getFileContent(locale, slug);

  // If content is not found and the locale is not English, fall back to English
  if (content === null && locale !== 'en') {
    content = await getFileContent('en', slug);
  }

  // If content is still not found, return a 404 error
  if (content === null) {
    return new NextResponse(`Service content not found for ${slug} in locale ${locale}`, { status: 404 });
  }
  
  // If the file is a full HTML document, extract only the content from the <body> tag
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const finalContent = bodyMatch ? bodyMatch[1] : content;

  // Return the content as HTML
  return new NextResponse(finalContent, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
