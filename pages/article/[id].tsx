import React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next/types/index";

import styles from '../styles/events.module.scss'
import Image from "next/image";

const Article = ({ article }: any) => {

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default Article
  
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article: any) => article.id);
//   const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
