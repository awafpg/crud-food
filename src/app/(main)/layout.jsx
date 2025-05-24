import FooterComp from "@/componenets/Footer";
import NavbarComp from "@/componenets/Navbar";

export const metadata = {
  title: "My Food App",
  description: "A simple food listing app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavbarComp />
        <main className="flex-grow">{children}</main>
        <FooterComp />
      </body>
    </html>
  );
}
