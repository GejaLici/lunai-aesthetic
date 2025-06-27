import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a placeholder middleware to prevent a build error.
// The matcher is configured to not match any paths, so it will not run.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/this-path-does-not-exist'],
};
