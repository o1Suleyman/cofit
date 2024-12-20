import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Logo from "@/components/logo";
import NavMenu from "@/components/navmenu";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CoFit",
  description: "AI-powered fitness and diet tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-dvh flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-20">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <Logo />
                  <NavMenu />
                  <HeaderAuth />
                </div>
              </nav>
              {/* <div className="max-w-5xl p-4"> */}
                {children}
              {/* </div> */}
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center gap-8 py-8 mt-auto">
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
