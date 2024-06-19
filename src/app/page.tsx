// app/page.tsx
"use client";
import React from 'react';
import Head from 'next/head';
import ThreeScene from '../components/ThreeScene';
import styles from './page.module.css'


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Tavos LLC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.company}>
          Tavos
        </div>
        <ThreeScene />
      </div>
      
    </div>
  );
}

export default Home;
