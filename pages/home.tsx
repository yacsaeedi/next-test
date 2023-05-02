import React from "react";
import Link from "next/link";

import { Input } from "@/app/components"

import styles from '../styles/home.module.scss'

const Home = () => {
    return (
      <main className={styles.container}>
        <span>this is home page</span>
        <Link href={'/events'}>Go to events list</Link>
      </main>
    )
  }

export default Home
  