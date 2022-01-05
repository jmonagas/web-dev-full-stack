import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className={styles.flexContainer}>
      <Image priority className={styles.img} src={process.env.NEXT_PUBLIC_URL + "/img/banner1.jpg"} layout='fill' objectFit='cover' objectPosition="center" alt="Image shows a glass sphere floating on a silver background" title="Image shows a glass sphere floating on a silver background" />
      <div className={styles.bannerText}>
        <h1 className={styles.bannerTextNormal}>Web Development By J. Monagas</h1>
        <h2 className={styles.bannerTextNormal}><span className={styles.textSpacing}>Digital&nbsp;&#9986;&nbsp;Marketing</span></h2>
        <Link href="/contact" passHref title='Contact Us Today'>
          <button className={styles.button}>Contact Us</button>
        </Link>
      </div>
    </div >
  )
}

export default Banner
