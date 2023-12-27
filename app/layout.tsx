import '#/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { SiteHeader } from '#/components/site-header';
import { TailwindIndicator } from '#/components/tailwind-indicator';
import { ThemeProvider } from '#/components/theme-provider';

import { fontSans } from '#/lib/fonts';
import { cn } from '#/lib/utils';
import { siteConfig } from '#/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html
    lang='en'
    suppressHydrationWarning
  >
    <head />
    <body
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
      >
        <div className='relative flex min-h-screen flex-col'>
          <SiteHeader />
          <div className='flex-1'>{children}</div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
