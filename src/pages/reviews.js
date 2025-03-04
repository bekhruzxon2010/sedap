import Head from "next/head";
import ReviewsList from "@/components/pages/reviews/ReviewsList";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "@/styles/Home.module.css";

export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ReviewsList />
      </div>
    </>
  );
}

Orders.getLayout = (pageProps) => (
    <MainLayout>
      <Orders {...pageProps} />
    </MainLayout>
)