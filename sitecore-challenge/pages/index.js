// import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
// import Display from '../Components/Display'
import { useInfiniteQuery } from 'react-query';
import ImageGrid from '../Components/ImageGrid';

export default function Home({}) {
        const [photos, setPhotos] = useState([]);

        const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
                'infiniteCharacters',
                async ({ pageParam = 1 }) =>
                        await fetch(
                                `https://api.unsplash.com/photos/?client_id=XCBRPySTSTb9f2pkpHVW9e9c3OegDxNBkVbEFwDFDwU`
                        ).then((result) => result.json())
        );

        console.log(data, 'data');

        console.log('testing console');

        useEffect(() => {
                if (data) {
                        setPhotos(...photos, data.pages);
                }
        }, [data]);

        return (
                <div className={styles.container}>
                        {data && data.pages && (
                                <ImageGrid photos={data.pages} />
                        )}
                </div>
        );
}
// export const getStaticProps= async ()=>{
//   const res= await fetch("https://api.unsplash.com/photos/?client_id=XCBRPySTSTb9f2pkpHVW9e9c3OegDxNBkVbEFwDFDwU")
//   const photos=await res.json()
//   return {
//     props:{
//       photos
//     }
//   }

// }
