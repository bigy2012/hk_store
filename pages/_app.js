import "@/styles/globals.css";
import Layout from "@/components/layout"

import "material-symbols";



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
