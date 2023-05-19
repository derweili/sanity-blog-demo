// route handler enabling draft mode
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {

	cookies().set('userlogin', '');
	redirect('/login/');
}