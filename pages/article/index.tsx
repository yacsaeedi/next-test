import React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next/types/index";

import styles from '../styles/events.module.scss'
// import Image from "next/image";

const Article = ({ article }: any) => {

  return (
    <div className={styles.list}>
      {article.map((item: any, index: any)=>{
        return(
          <div className={styles.card}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Article

// export async function getServerSideProps() {
//   const { events_categories } = await import('../app/data/data.json');
//   const paths = events_categories.map((event: any) => ({
//     params: { id: event.id }
//   }))
//   console.log('events_categories',events_categories);
//   console.log('paths', paths);

//   return {
//       props: {
//           data: events_categories,
//       },
//   };
// }


