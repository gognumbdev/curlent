import Layout from '../components/Layout'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';
import { Provider } from 'react-redux';
import getStore from "../redux/store.js"
import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react';
const progress = new ProgressBar({
  size:4,
  color:"#F59E0B",
  className:'z-50',
  delay:100,
});

const {store,persistor} = getStore();

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp