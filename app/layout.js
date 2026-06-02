import "./globals.css";

export const metadata = {
  title: "EDWIN BOSCO - Frontend Developer Portfolio",
  description: "Supply Chain Analyst at Primaflow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
