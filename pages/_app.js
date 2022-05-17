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
import {
  getChainOptions,
  StaticWalletProvider,
  WalletControllerChainOptions,
  WalletProvider,
} from '@terra-money/wallet-provider';

const {store,persistor} = getStore();

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);


function MyApp({ Component, defaultNetwork,walletConnectChainIds,pageProps,...appProps }) {
  
  if ([`/auth/signin`,`/auth/signup`].includes(appProps.router.pathname))
  return <Component {...pageProps} />;

  const main =(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )

  return typeof window !== 'undefined' ? (
    <WalletProvider
      defaultNetwork={defaultNetwork}
      walletConnectChainIds={walletConnectChainIds}
    >
      {main}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={defaultNetwork}>
      {main}
    </StaticWalletProvider>
  );

  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistor}>
  //       <Layout>
  //         <Component {...pageProps} />
  //       </Layout>
  //     </PersistGate>
  //   </Provider>
  // )
}

MyApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};


export default MyApp
