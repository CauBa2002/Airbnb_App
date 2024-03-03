import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';
import Navbar from './components/navbar/navbar';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import RegisterModal from './components/modals/RegisterModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aribnb',
  description: 'Aribnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
