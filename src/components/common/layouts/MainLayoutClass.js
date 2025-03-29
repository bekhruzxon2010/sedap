import React, { Component } from "react";
import Head from "next/head";
import Navigation from "../Navigation";

class MainLayout extends Component {
    
  render() {
    return (
      <main
        style={{
          display: 'flex',
          minHeight: '100vh',
          minWidth: '100vw',
        }}
      >
        <div>
          <Navigation />
        </div>
        <div>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default MainLayout;