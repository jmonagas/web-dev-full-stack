import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Services.module.css'
import Image from 'next/image'

const services = () => {
  return (
    <div>
      <Head>
        <title>Services at Web Development By J. Monagas: Digital Marketing</title>
        <meta name="description" content="Whether you are exploring your niche or have decided what the next marketing steps will be for your business strategy, online presence, and functional website" key="description" />
        <meta name="keywords" content="Web Developer, Frontend, Backend, Full Stack, Search Engine Optimization, SEO Audits, Web Design, Mobile First, English Spanish, Ecommerce, User Experience, Mobile Responsive" key="keywords" />
      </Head>

      <Banner />

      <div className={styles.articleIntro}>
        <h1 className={styles.h1}>Services at Web Development By J. Monagas</h1>
        <h2 className={styles.h2}>What We Do</h2>
        <h3 className={styles.h3}>Whether you are just exploring your niche or have already decided what your next marketing steps will be, even if you already have a business strategy and online presence, including a fully functional website generated via WordPress or Shopify or Wix or BigCommerce... Let&apos;s have this conversation!</h3>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.gridItem1}>
          <div className={styles.sectionText}>
            <div className={styles.cardImg}>
              <div className={styles.img}>
                <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/shopping-ecommerce.jpg"} width="400px" height="250px" objectFit='cover' objectPosition="center" alt="Image shows two hands holding a tablet in front of a laptop" title="Image shows two hands holding a tablet in front of a laptop" />
              </div>
            </div>
            <h2 className={styles.h2Red}>Front-End Web Development</h2>
            <h3 className={styles.h3}>Client Based And Down To Earth Experiences</h3>
            <p className={styles.justifiedCards}>Let us build those great interactive components for your web project to enhance the client side with visual user interfaces, refined aesthetics, and layouts. We can use basic HTML, CSS, and JavaScript to engage your audience through text, images, and colors. By the same token, we can use the industry state of the art frameworks such as Vue, Nuxt, React, Next, Angular, other for top speed and to deliver a final product that your clients will appreciate while it generates online traffic and sales</p>
          </div>
        </div>

        <div className={styles.gridItem2}>
          <div className={styles.sectionText}>
            <div className={styles.cardImg}>
              <div className={styles.img}>
                <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-performance-SEO.jpg"} width="400px" height="250px" objectFit='cover' objectPosition="center" alt="Image shows a tablet displaying content on top of a laptop" title="Image shows a tablet displaying content on top of a laptop" />
              </div>
            </div>
            <h2 className={styles.h2Red}>Back-End Web Development</h2>
            <h3 className={styles.h3}>Turning User Interactions Into Web Actions</h3>
            <p className={styles.justifiedCards}>You have completed the front of your store or website. It is time to make sure that you keep it running and functioning properly. The server and database of your site need to be built and implemented with logic for performance versus demand. This is vital in the modern web development process. We can make good use of programming languages such as Python along with SQL and MariaDB in a virtual environment that will handle your products or services information, images, and prices</p>
          </div>
        </div>

        <div className={styles.gridItem3}>
          <div className={styles.sectionText}>
            <div className={styles.cardImg}>
              <div className={styles.img}>
                <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/shopping-mobile-first.jpg"} width="400px" height="250px" objectFit='cover' objectPosition="center" alt="Image shows one hand holding a mobile and another hand with a credit card" title="Image shows one hand holding a mobile and another hand with a credit card" />
              </div>
            </div>
            <h2 className={styles.h2Red}>Full-Stack Web Development</h2>
            <h3 className={styles.h3}>Building Complete Web Based Applications</h3>
            <p className={styles.justifiedCards}>99% of business owners have no time or money to misuse in complicated marketing campaigns or agencies. So, they usually hire a full stack web development specialist to code or work on both the frontend and backend of their websites. The key is efficiency, right? Full stack web developers can troubleshoot and solve problems that may and will occur on the frontend or backend of a website. You cannot afford to launch your website and forget about maintaining the parts that make it a valuable investment</p>
          </div>
        </div>

        <div className={styles.gridItem4}>
          <div className={styles.sectionText}>
            <div className={styles.cardImg}>
              <div className={styles.img}>
                <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/currency-canada.jpg"} width="400px" height="250px" objectFit='cover' objectPosition="center" alt="Image shows Canadian money and a calculator" title="Image shows Canadian money and a calculator" />
              </div>
            </div>
            <h2 className={styles.h2Red}>How We Can Help Your Business</h2>
            <h3 className={styles.h3}>The Time to Start To Grow Together Is Now</h3>
            <p className={styles.justifiedCards}>We do not have to reinvent the wheel, right? You must have heard of how Jeff Bezos started Amazon off as an online bookstore right from his garage back in 1994. Next, Jack Ma founded Alibaba right from his own apartment in 1999. The cofounder of Apple, Steve Wozniak, was a self educated electronics engineer. So, do not even think about putting all of your precious business budget on expensive social media marketing campaigns, because that is not your only choice. Let&apos;s find out what&apos;s best for you</p>
          </div>
        </div>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionRight}>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Follow Our Standard Procedure</h2>
            <h3 className={styles.h3}>Increase Efficiency And Productivity</h3>
            <p className={styles.justified}>Let&apos;s talk about your business needs in terms of web development, maintenance, user interface (UI), user experience (UX), search engine optimization (SEO), cybersecurity, best practices, GTmetrix, Core Web Vitals, Google PageSpeed Insights, mobile responsiveness, quality assurance, and testing. This is in fact very simple to understand if we compare it to marketing (or the process involving design, creation, research, and data mining) versus advertising (or the process of making a product or service recognized by an audience). You need both, right? Then, the logical question is: How soon do you need to sell your products or services or both?</p>
          </div>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-app-optimization.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a set of golden interlocking gears" title="Image shows a set of golden interlocking gears" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default services
