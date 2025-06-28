import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // This middleware is intentionally left empty.
  // It exists to satisfy the Next.js requirement for a middleware file if one is present.
  return NextResponse.next();
}

// The matcher is configured to not run on any path.
export const config = {
  matcher: [],
};
