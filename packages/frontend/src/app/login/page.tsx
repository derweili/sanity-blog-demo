import CtaButton from '@components/CtaButton'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const Login = async () => {
	async function doLogin() {
    'use server';
    
		const currentTime = new Date().toString();
		cookies().set('userlogin', currentTime);

		redirect('/profile');
  }

	return (
		<>
			<div>
				<h1>Login</h1>
				<p>
					To test this login, use any username and password.
				</p>
				<form action={doLogin as any}>
					<label htmlFor="username">Username</label><br />
					<input type="text" name="username" id="username" /><br />
					<label htmlFor="password">Password</label><br />
					<input type="password" name="password" id="password" /><br />
					<CtaButton type="submit">Login</CtaButton>
				</form>
			</div>
		</>
	)
}

export default Login