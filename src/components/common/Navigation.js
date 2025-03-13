import React, { Component } from "react";
import Link from "next/link";
import styles from "@/styles/Navigation.module.css"
import Example from "@/pages/example"
import Width from "@/pages/witdh"
import { withRouter } from "next/router";

class Navigation extends Component {
  render() {
    const { router } = this.props;
    
    return (
      <>
      <div className={styles['mtop']}>
        <div
          style={{
            backgroundColor: "aliceblue",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            href="/dashboard"
            style={{
              background: router.asPath === "/dashboard" ? "#00B07426" : undefined,
            }}
          >
            Dashboard
          </Link>
          <Link
            href="/orders"
            style={{
              background: router.asPath === "/orders" ? "#00B07426" : undefined,
            }}
          >
            Order List
          </Link>
          <Link
            href="/details"
            style={{
              background: router.asPath === "/details" ? "#00B07426" : undefined,
            }}
          >
            Order Detail
          </Link>
          <Link
            href="/customers"
            style={{
              background: router.asPath === "/customers" ? "#00B07426" : undefined,
            }}
          >
            Customer
          </Link>
          <Link
            href="/analytics"
            style={{
              background: router.asPath === "/analytics" ? "#00B07426" : undefined,
            }}
          >
            Analytics
          </Link>
          <Link
            href="/reviews"
            style={{
              background: router.asPath === "/reviews" ? "#00B07426" : undefined,
            }}
          >
            Reviews
          </Link>
          <Link
            href="/foods"
            style={{
              background: router.asPath === "/foods" ? "#00B07426" : undefined,
            }}
          >
            Foods
          </Link>
          <Link
            href="/food_detail"
            style={{
              background: router.asPath === "/food_detail" ? "#00B07426" : undefined,
            }}
          >
            Food Detail
          </Link>
          <Link href="#">Customer Detail</Link>
          <Link href="#">Calendar</Link>
          <Link href="#">Chat</Link>
          <Link href="#">Wallet</Link>
        </div>
      </div>
      <div className={styles['mleft']}>
      <Example/>
      </div>
      <div className={styles['mleft111']}>
      {/* <Width /> */}
      </div>
      </>
    );
  }
}


export default withRouter(Navigation)
