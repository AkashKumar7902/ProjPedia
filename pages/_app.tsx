import { RecoilRoot } from "recoil";
import { SnackbarProvider } from "notistack";
import { AppProps } from "next/app";
import "../styles/globals.css";

import CommonLayout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <CommonLayout/>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}

export default MyApp;
