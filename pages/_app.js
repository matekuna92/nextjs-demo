import '../styles/globals.css'
import Layout from "../components/layout/Layout";

// these props are passed by NextJS automatically
// Layout can be wrapped for the Main Component, so it doesn't have to be added manually on every single page
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
