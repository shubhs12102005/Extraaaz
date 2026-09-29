import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col selection:bg-brand-600/90 selection:text-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
