import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
	const loginCookie = request.cookies.get('userlogin');
	console.log('loginCookie', loginCookie);

	if (!loginCookie || loginCookie.value === '') {
		return NextResponse.redirect(new URL('/login', request.url));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/profile/'],
};