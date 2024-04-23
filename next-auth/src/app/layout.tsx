import { SessionProvider } from "next-auth/react";
import AuthProvider from '../context/AuthProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <AuthProvider>
      <body >{children}</body>
      </AuthProvider>
    </html>
  );
}
