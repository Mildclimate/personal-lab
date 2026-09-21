import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./site-header";

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
          <SiteHeader />

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

