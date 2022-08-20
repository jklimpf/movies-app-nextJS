import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
