import { ReactNode } from 'react';

type ServicePageLayoutProps = {
  serviceName: string;
  children: ReactNode;
};

export function ServicePageLayout({ serviceName, children }: ServicePageLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-black font-sans">
      <div className="container mx-auto px-4 py-8 prose prose-lg">
        <header>
          <h1><strong>{serviceName}</strong>: Expert Care and Transformative Results at LUNAI</h1>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>&copy; {currentYear} LUNAI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
