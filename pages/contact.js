import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Web Development By J. Monagas for Digital Marketing</title>
        <meta name="description" content="Web Development By J. Monagas incorporates creativity, problem solving skills, and project management to translate business requirements into actionable plans" key="description" />
        <meta name="keywords" content="Web Developer, Frontend, Backend, Full Stack, Search Engine Optimization, SEO Audits, Web Design, Mobile First, English Spanish, Ecommerce, User Experience, Mobile Responsive" key="keywords" />
      </Head>

      <Banner />

      <div className={styles.articleIntro}>
        <h1 className={styles.h1}>Contact Web Development By J. Monagas</h1>
        <h2 className={styles.h2}>Why Contract Us</h2>
        <h3 className={styles.h3}>Web Development By J. Monagas is the brainchild of Jose G. Monagas, a full stack web developer with a solid, professional background in Applied Linguistics. Being highly skilled in copywriting and proofreading in English and Spanish enables him to produce quality content for the Internet</h3>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionLeft}>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-app-budget.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a pair of glasses, a pen and a computer keyboard" title="Image shows a pair of glasses, a pen and a computer keyboard" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>We Understand Why You Are Here</h2>
            <h3 className={styles.h3}>Generate Smart Solutions To Web Presence</h3>
            <p className={styles.justified}>Our approach is down to earth and incorporates creativity, problem solving skills, and project management to translate business requirements into actionable development plans, coordinate implementation efforts, and on time, on budget results. Three keywords that describe us perfectly are: Transparency, Accountability, and Fairness. We are passionate about building user friendly websites and apps that are meant to be used in real life situations. We focus on simplicity and performance while managing the complexities of each web development project</p>
          </div>
        </div>
      </div>

      <div className={styles.withoutBackgroundColor}>
        <div className={styles.articleSectionRight}>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>That&apos;s Totally Fair... But Why You?</h2>
            <h3 className={styles.h3}>Your Resources Employed To Their Best</h3>
            <p className={styles.justified}>Our web development skills are evolving while the covid-19 digital transformation continues to disrupt traditional industries. We focus on what we can do! If we do not have the answer right away, we will let you know without false pretenses. Next, we will invest the time needed to research thoughtfully, find the information required, and get that answered for you. We only ask that you offer a detailed report of the issue you encountered based on your needs. If you commit to working with us, there will be no charge for the initial consultation</p>
          </div>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-app-coding.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a laptop, a notebook and a pen" title="Image shows a laptop, a notebook and a pen" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionLeft}>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-app-core-vitals.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a hand pointing to a pie graph on a laptop screen" title="Image shows a hand pointing to a pie graph on a laptop screen" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>That Makes Sense, Right? Where Do We Start?</h2>
            <h3 className={styles.h3}>Products And Services To Meet Your Needs</h3>
            <p className={styles.justified}>Whether you are just exploring your niche or have already decided what your next marketing steps will be, even if you already have a business strategy and online presence, including a fully functional website generated via WordPress or Shopify or Wix or BigCommerce... you are just scratching the surface and getting more acquainted with new technologies. This ability is vital to increase the revenue per visitor. Let&apos;s have this conversation! Let ideas flow</p>
          </div>
        </div>
      </div>

      <div className={styles.withoutBackgroundColor}>
        <div className={styles.articleSectionRight}>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Ask Us How We Can Help Your Business</h2>
            <h3 className={styles.h3}>Book a Free Consultation Today</h3>
            <p className={styles.justified}>We do not have to reinvent the wheel! You must have heard of how Jeff Bezos started Amazon off as an online bookstore right from his garage back in 1994. Next, Jack Ma founded Alibaba right from his own apartment in 1999. The cofounder of Apple, Steve Wozniak, was a self educated electronics engineer. So, do not even think about putting all of your precious business budget on expensive social media marketing campaigns, because that is not your only choice</p>
          </div>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/currency-europe.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a magnifying glass against 50-euro bills and a calculator" title="Image shows a magnifying glass against 50-euro bills and a calculator" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactItem1}>
          <h2 className={styles.contactTitle}>Phone</h2>
          <h3 className={styles.contactTitle}>1 (403) 397 3696</h3>
        </div>
        <div className={styles.contactItem2}>
          <h2 className={styles.contactTitle}>Email</h2>
          <h3 className={styles.contactTitle}>jmonagas@hotmail.ca</h3>
        </div>
        <div className={styles.contactItem3}>
          <h2 className={styles.contactTitle}>Address</h2>
          <h3 className={styles.contactTitle}>Calgary, AB, Canada</h3>
        </div>
        <div className={styles.contactItem4}>
          <h2 className={styles.contactTitle}>Hours</h2>
          <h3 className={styles.contactTitle}>Weekdays 9 am to 5 pm</h3>
        </div>
      </div>

    </div >
  )
}
export default contact
