type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

// The root layout applies to all routes and is used to render the <html> and <body> tags.
export default function RootLayout({children, params}: Props) {
  return (
    <html lang={params.locale} className="smooth-scroll">
      <body>{children}</body>
    </html>
  );
}
