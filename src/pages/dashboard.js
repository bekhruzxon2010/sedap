import Head from "next/head";
import OrdersList from "@/components/pages/orders/OrdersList";
import MainLayout from "@/components/common/layouts/MainLayout";
import DashboardList from "@/components/pages/dashboard/DashboardList";
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
                < DashboardList />      </div>
        </>
    );
}

Orders.getLayout = (pageProps) => (
    <MainLayout>
        <Orders {...pageProps} />
    </MainLayout>
)