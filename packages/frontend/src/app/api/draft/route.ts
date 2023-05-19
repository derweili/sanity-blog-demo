// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {

	const { searchParams } = new URL(request.url);
	const slug = searchParams.get('slug');

	const redirectUrl = slug ? `/movie/${slug}` : '/';

	draftMode().enable();
	redirect(redirectUrl);
}