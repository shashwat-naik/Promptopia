// Layout for applying google auth next
"use client";

import { SessionProvider } from 'next-auth/react';

const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider