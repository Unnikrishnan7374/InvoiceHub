import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top of page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle dtlsban scroll sticky fixed class
  useEffect(() => {
    const handleScroll = () => {
      const dtlsban = document.querySelector('.dtlsban');
      if (dtlsban) {
        if (window.scrollY > 20) {
          dtlsban.classList.add('fixed');
        } else {
          dtlsban.classList.remove('fixed');
        }
      }
    };
    handleScroll(); // Check immediately on navigation

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div id="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
