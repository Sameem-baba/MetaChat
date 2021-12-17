import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";
import { RecoilRoot } from "recoil";
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
