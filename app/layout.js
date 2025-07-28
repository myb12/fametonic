import { Figtree  } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'], 
  display: 'swap',
  variable: '--font-figtree', 
});

export const metadata = {
  title: 'Fametonic',
  description: 'Turn Social Media Into a Profitable Career with Fametonic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
