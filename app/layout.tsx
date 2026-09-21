import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry's Personal Lab",
  description:
    "A personal laboratory for projects, research, experiments, and technology.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f5f4",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Lab", href: "/lab" },
  { name: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="border-b border-stone-200/90 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              {/* Brand */}
              <Link
                href="/"
                className="group flex items-center gap-3"
              >
                <span className="text-sm font-semibold tracking-tight text-stone-900">
                  Henry&apos;s Personal Lab
                </span>

                <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 transition group-hover:text-stone-700 sm:inline">
                  LAB / 01
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-sm">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-stone-200 bg-white/80">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span>Henry&apos;s Personal Lab</span>
                <span className="text-stone-300">/</span>
                <span>Self-hosted</span>
              </div>

              <div className="flex items-center gap-4">
                <span>Built with Next.js</span>
                <span className="text-stone-300">·</span>
                <span>2026</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

