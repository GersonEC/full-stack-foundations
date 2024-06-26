import { Links, LiveReload, Scripts } from '@remix-run/react'
import { KCDShop } from './kcdshop.tsx'

// 🐨 export a links function here that adds the favicon
// 💰 It should have the following properties:
// - rel: 'icon'
// - type: 'image/svg+xml'
// - href: '/favicon.svg'
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			// all files in the public directory are served at the root of the site
			type:'image/svg+xml',
			href: '/favicon.svg',
		},
	]
}

export default function App() {
	return (
		<html lang="en">
			<head><Links /></head>
			<body>
				<p>Hello Worldd</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
