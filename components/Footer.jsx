import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.flexFooter}>
      <div className={styles.footerLeft}>
        <span>Jose G. Monagas&nbsp;&copy;&nbsp;2022</span>
      </div>
      <div className={styles.footerCenter}>
        <span className={styles.footerBrand}><Link href="/" ><a title="Back to Homepage">W&#8272;M</a></Link></span>
      </div>
      <div className={styles.footerRight}>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            <Link href="/" ><a title="Home">Home</a></Link>
          </li>
          <li className={styles.footerListItem}>
            <Link href="/services" ><a title="Services">Services</a></Link>
          </li>
          <li className={styles.footerListItem}><Link href="/contact" ><a title="Contact">Contact</a></Link>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Footer
