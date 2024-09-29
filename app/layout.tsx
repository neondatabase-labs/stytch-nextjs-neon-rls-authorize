import StytchProvider from "@/app/stytch-provider";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <StytchProvider>
        <body className={`min-h-screen flex flex-col antialiased`}>
          {children}
        </body>
      </StytchProvider>
    </html>
  );
}
