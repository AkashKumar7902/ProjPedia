import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}

export default MyApp;
