import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navBar}>
      <div>
        <span className={styles.navBrand}>
          <Link href="/" >
            <a title="Back to Homepage">W&#8272;M</a>
          </Link>
        </span>
      </div>
      <div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" >
              <a className={styles.border} title="Home">Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" >
              <a className={styles.border} title="Services">Services</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" >
              <a className={styles.border} title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburgerMenu}>
        <ul onClick={() => setOpen(false)} className={styles.hamburgerList} style={{ left: open ? "0px" : "-100vw" }}>
          <li className={styles.hamburgerItem}>
            <Link href="/" >
              <a title="Home">Home</a>
            </Link>
          </li>
          <li className={styles.hamburgerItem}>
            <Link href="/services" >
              <a title="Services">Services</a>
            </Link>
          </li>
          <li className={styles.hamburgerItem}>
            <Link href="/contact" >
              <a title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navHamburger} onClick={() => setOpen(!open)}>
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
      </div>
    </div >
  )
}

export default Navbar
