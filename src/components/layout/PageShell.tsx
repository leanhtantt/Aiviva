import React from 'react';
import { Outlet, Navigate, useLocation, useParams } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export function PageShell() {
  const { lang } = useParams<{ lang: string }>();
  const { pathname } = useLocation();

  // Redirect root or invalid lang to /en
  if (!lang || (lang !== 'en' && lang !== 'vi')) {
    const cleanPath = pathname.replace(/^\/[^/]+/, '');
    return <Navigate to={`/en${cleanPath}`} replace />;
  }

  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink font-sans">
      <SiteHeader />
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
