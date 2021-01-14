import {ChakraProvider} from '@chakra-ui/react'
import App from "next/app";
import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <ChakraProvider>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);