import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Purnomo — Fullstack & AI Engineer",
  description:
    "Portfolio of Daniel Purnomo — Information Systems student & Software Engineer. Fullstack web development, AI/ML, and system architecture.",
};

const stripExtensionAttrs = `(function () {
  var ATTRS = ["bis_skin_checked", "bis_size", "bis__delayed", "data-gramm", "data-gramm_editor", "data-gr-ext"];
  function clean(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      if (el.hasAttribute && el.hasAttribute(ATTRS[i])) el.removeAttribute(ATTRS[i]);
    }
  }
  clean(document.documentElement);
  clean(document.body);
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      clean(mutations[i].target);
    }
  });
  observer.observe(document.documentElement, {
    subtree: true,
    attributes: true,
    attributeFilter: ATTRS,
  });
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: stripExtensionAttrs }} />
      </head>
      <body suppressHydrationWarning className="bg-zinc-950 font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
