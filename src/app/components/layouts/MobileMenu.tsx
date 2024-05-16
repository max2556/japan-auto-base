import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const links = [
  {
    name: 'Главная страница',
    href: '/',
  },
  {
    name: 'Online аукцион',
    href: '/online-auction',
  },
  {
    name: 'Каталог',
    href: '/catalog',
  },
  {
    name: 'История продаж',
    href: '/sales-history',
  },
  {
    name: 'Калькулятор',
    href: '/calculator',
  },
  {
    name: 'Договор',
    href: '/contract',
  },
  {
    name: 'Доставка',
    href: '/delivery',
  },
  {
    name: 'Контакты',
    href: '/contacts',
  },
];

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      onToggle();
    }
  };

  useEffect(function () {
    const handleClick = (e: MouseEvent) => handleClickOutside(e);
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 lg:hidden bg-white/80 backdrop-blur p-4"
      ref={menuRef}
    >
      <div className="w-full h-full relative">
        {/* Close Button */}
        <button
          onClick={onToggle}
          className="w-8 h-8 absolute top-2 right-2 grid place-content-center bg-brand-dark rounded-7"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1679 1.16789C15.5584 1.55841 15.5584 2.19158 15.1679 2.5821L9.75001 8L15.1679 13.4179C15.5584 13.8084 15.5584 14.4416 15.1679 14.8321L14.8321 15.1679C14.4416 15.5584 13.8084 15.5584 13.4179 15.1679L8.00001 9.75L2.58211 15.1679C2.19159 15.5584 1.55842 15.5584 1.1679 15.1679L0.832112 14.8321C0.441588 14.4416 0.441588 13.8084 0.832112 13.4179L6.25001 8L0.832111 2.5821C0.441587 2.19158 0.441588 1.55841 0.832112 1.16789L1.1679 0.8321C1.55842 0.441576 2.19159 0.441575 2.58211 0.8321L8.00001 6.25L13.4179 0.832098C13.8084 0.441574 14.4416 0.441576 14.8321 0.8321L15.1679 1.16789Z"
              fill="white"
            />
          </svg>
        </button>
        <ul className="space-y-7 pb-4 pt-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                onClick={onToggle}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-brand-purple'
                    : 'text-brand-purple/50'
                } hover:text-brand-purple transition-all duration-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
