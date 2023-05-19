import CtaButton from '@components/CtaButton'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

const Profile = async () => {

	const loginTime = cookies().get('userlogin');

	return (
		<>
			<div>
				<h1>Profile</h1>
				<h2>This is your user profile page</h2>
				<p>
					You logged in at {loginTime?.value}
				</p>
				<Link href={'/api/logout'}>
					<CtaButton>
						Logout
					</CtaButton>
				</Link>
			</div>
		</>
	)
}

export default Profile