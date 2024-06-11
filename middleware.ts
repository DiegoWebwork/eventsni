import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher([
  '/',
  '/events/:id(.*)',
  '/api/webhook/clerk(.*)',
  '/api/webhook/stripe(.*)',
  '/api/uploadthing(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware((auth, request) => {
  if(!publicRoutes(request)) {
    auth().protect();
  }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };