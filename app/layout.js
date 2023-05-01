
import './globals.css'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] })

import ClientComponent from './root-clientComponent';

async function getData() {
  const cookieStore = cookies();
  let cookie = (cookieStore.get('token') || {}).value || '';
  const res = await fetch(
    `http://localhost:3000/api/auth`,
    { 
      cache: 'no-store', 
      method: 'POST', 
      headers: {
        Cookie: `token=${cookie}`
      }
    },
  );
  return await res.json();
}

export default async function RootLayout({ children, ...rest }) {
  const data = await getData();
  return (
    <html lang="en">
    <body className={inter.className}>
      <ClientComponent authData={data}>
        {children}
      </ClientComponent>
    </body>
  </html>
  )
}
