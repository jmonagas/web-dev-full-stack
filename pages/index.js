import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Development By J. Monagas: Digital Marketing, Full Stack</title>
        <meta name="description" content="Web Development By J. Monagas Introduces An Unpretentious & Creative Approach To Full Stack Web Projects Accessible In English & Spanish To A Broader Audience" key="description" />
        <meta name="keywords" content="Web Developer, Frontend, Backend, Full Stack, Search Engine Optimization, SEO Audits, Web Design, Mobile First, English Spanish, Ecommerce, User Experience, Mobile Responsive" key="keywords" />
      </Head>

      <Banner />

      <div className={styles.articleIntro}>
        <h1 className={styles.h1}>About Web Development By J. Monagas</h1>
        <h2 className={styles.h2}>Who We Are</h2>
        <h3 className={styles.h3}>Web Development By J. Monagas offers an unpretentious approach to frontend and backend website design and maintenance plus SEO audits along with search engine optimization under best practices for optimum results</h3>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionLeft}>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-security-transactions.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a combination padlock on top of a laptop keyboard" title="Image shows a combination padlock on top of a laptop keyboard" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Identify Key Risks And Challenges</h2>
            <h3 className={styles.h3}>Generate Solutions And Boost Efficiency</h3>
            <p className={styles.justified}>Why on Earth would you make your present or future customers access your business website only by downloading some exclusive app on a mobile or some computer software when all you need to do is to have your web developer write the code in HTML, CSS, JavaScript, Python or via a framework such as Vue, Nuxt, React, Next, or Angular? Mobile friendly and progressive web apps (PWA) is the way to go in 2022</p>
          </div>
        </div>
      </div>

      <div className={styles.withoutBackgroundColor}>
        <div className={styles.articleSectionRight}>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Create, Manage And Update Projects</h2>
            <h3 className={styles.h3}>Briefs, Standards And Workflow Documentation</h3>
            <p className={styles.justified}>We did not invent web programming or the Internet, nor we can claim that we are the experts in every single aspect of modern Internet based technologies. But we have learned the trade and know how to use the best web development tools to build both the frontend and backend of web applications using the most relevant programming languages and technologies available. And, to be honest, it&apos;s the Wild West out there</p>
          </div>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-performance-audit.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a tablet and a laptop displaying graphs" title="Image shows a tablet and a laptop displaying graphs" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionLeft}>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-development-value.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows a web developer coding on a laptop" title="Image shows a web developer coding on a laptop" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Start Addressing Your Business Needs</h2>
            <h3 className={styles.h3}>In Terms Of User Interface Versus User Experience</h3>
            <p className={styles.justified}>It is not about you anymore! You need to acquire a sound appreciation of user experience (also referred to as UX) both on the frontend and the backend. More importantly, you must communicate effectively with clients, associates, contractors, and allies with a view to staying informed of relevant matters pertaining to your main line of business (either services or products) versus the most critical aspects of website optimization (generally described as SEO)</p>
          </div>
        </div>
      </div>

      <div className={styles.withoutBackgroundColor}>
        <div className={styles.articleSectionRight}>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Employ The Unlimited Web Resources Available</h2>
            <h3 className={styles.h3}>To Achieve A Market Competitive Advantage</h3>
            <p className={styles.justified}>Now it is the time to strategize and implement those online marketing ideas to generate demand for your products and services. Let us craft and fine tune your business brand and web presence through attractive and original media content. Cut the cost of delivery and the time it takes to get your products or services to your costumers. Okay, we get it! You may not yet be as big as Amazon or Microsoft; however, you cannot afford to not managing your online reputation</p>
          </div>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/web-development-code.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows web development code on a screen" title="Image shows web development code on a screen" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.withBackgroundColor}>
        <div className={styles.articleSectionLeft}>
          <div className={styles.sectionImg}>
            <div className={styles.img}>
              <Image className={styles.imgRadius} src={process.env.NEXT_PUBLIC_URL + "/img/currency-united-states.jpg"} width="400px" height="360px" objectFit='cover' objectPosition="center" alt="Image shows 3 U.S.A. one-dollar bills on a laptop keyboard" title="Image shows 3 U.S.A. one-dollar bills on a laptop keyboard" />
            </div>
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.h2}>Ask Us How We Can Help Your Business</h2>
            <h3 className={styles.h3}>Book A Consultation And Find Out</h3>
            <p className={styles.justified}>We do not have to reinvent the wheel! You must have heard of how Jeff Bezos started Amazon off as an online bookstore right from his garage back in 1994. Next, Jack Ma founded Alibaba right from his own apartment in 1999. The cofounder of Apple, Steve Wozniak, was a self educated electronics engineer. So, do not even think about putting all of your precious business budget on expensive social media marketing campaigns, because that is not your only choice</p>
          </div>
        </div>
      </div>

    </div>
  )
}
