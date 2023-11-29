export const metadata = {
  title: "Apeiron",
  description: "Học lập trình để đi làm",
  keywords: "Học lập trình, f8,abc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
