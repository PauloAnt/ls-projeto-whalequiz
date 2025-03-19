import { Roboto } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata = {
  title: "WhaleQuiz",
  description: "Teste seus conhecimentos com quizzes interativos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <div className="content-wrapper">
          <main className="page-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
