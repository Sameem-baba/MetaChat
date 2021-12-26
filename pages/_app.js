import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <RecoilRoot>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            style: {
              background: "#9E23A3",
              borderRadius: "25px",
              color: "#fff",
            },
          }}
        />
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
