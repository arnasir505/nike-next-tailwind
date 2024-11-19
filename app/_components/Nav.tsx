import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '@/public/assets/images/header-logo.svg';
import hamburger from '@/public/assets/icons/hamburger.svg';
import { navLinks } from '../_constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10'>
      <nav className='flex justify-between items-center max-container'>
        <Link href='/'>
          <Image src={headerLogo} alt='Nike logo' width={130} height={29} />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}sdf
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
