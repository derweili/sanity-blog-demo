import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'News',
    href: '/news',
  },
];

export default function Nav() {
  return (
    <nav>
      <ul>
          {
            navItems.map((item, index) => (
              <Link href={item.href} key={index}>
                  {item.label}
              </Link>
            ))
          }
      </ul>
    </nav>
  );
}