import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.scss';

export default function GlobalNavBar() {
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <Image src='/logo/gnb-logo-pc.png' width={151} height={40} className={styles.pcLogo} alt='logo'></Image>
        <Image src='/logo/gnb-logo-mobile.png' width={71} height={40} className={styles.mobileLogo} alt='logo'></Image>
      </Link>
    </div>
  );
}
