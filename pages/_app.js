import '@/styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: .6,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
              opacity: 0,
            },
          }}
          className="base-page-size"
        >

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  )
}
