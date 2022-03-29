import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageGrid from '../Components/ImageGrid'




export const getStaticProps= async ()=>{
  const res= await fetch("https://api.unsplash.com/photos/?client_id=XCBRPySTSTb9f2pkpHVW9e9c3OegDxNBkVbEFwDFDwU")
  const photos=await res.json()
  return {
    props:{
      photos
    }
  }

  
}
export default function Home({photos}) {
  console.log(photos)

  return (
    <div className={styles.container}>
      <ImageGrid photos={photos}/>
    
      
      
       
    </div>
  )
}



