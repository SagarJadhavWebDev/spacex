import BaseLayout from "@/organisms/BaseLayout";
import client from "@/services/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   
      <ApolloProvider client={client}>
      <BaseLayout >
        <Component {...pageProps} />
        </BaseLayout>
      </ApolloProvider>
      
    </>
  );
}
