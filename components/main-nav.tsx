import Link from 'next/link';

import { Logo } from '#/components/icons/logo';

import { cn } from '#/lib/utils';
import { siteConfig } from '#/config/site';

type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};

type MainNavProps = {
  items?: NavItem[];
};

export const MainNav = ({ items = undefined }: MainNavProps) => (
  <div className='flex gap-6 md:gap-10'>
    <Link
      href='/'
      className='flex items-center space-x-2'
    >
      <Logo className='h-6 w-6' />
      <span className='inline-block font-bold'>{siteConfig.name}</span>
    </Link>
    {items?.length ? (
      <nav className='flex gap-6'>
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                href={item.href}
                className={cn(
                  ' flex items-center text-sm font-medium text-muted-foreground',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    ) : null}
  </div>
);
