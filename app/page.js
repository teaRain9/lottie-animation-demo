'use client'

import styles from './page.module.css'
import * as Profile from '../assets/112487-sample.json'
import * as NikeLogo from '../assets/NikeLogo.json'
import * as Title from '../assets/Bouncing-period-[remix].json'
import Lottie from 'lottie-react'

export default function Home() {

  const nikeDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NikeLogo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const titleDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NikeLogo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Animation Demo Title</h1>
      <div className={styles.animation}>
        <Lottie animationData={Profile} options={nikeDefaultOptions}/>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi itaque nam necessitatibus, nemo quo repudiandae. Dolores facere iure, natus nemo praesentium provident quae recusandae repellat! Architecto culpa omnis quia?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi itaque nam necessitatibus, nemo quo repudiandae. Dolores facere iure, natus nemo praesentium provident quae recusandae repellat! Architecto culpa omnis quia?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi itaque nam necessitatibus, nemo quo repudiandae. Dolores facere iure, natus nemo praesentium provident quae recusandae repellat! Architecto culpa omnis quia?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi itaque nam necessitatibus, nemo quo repudiandae. Dolores facere iure, natus nemo praesentium provident quae recusandae repellat! Architecto culpa omnis quia?</p>
      <div className={styles.container}>
        <div className={styles.animation}>
          <Lottie animationData={Title} options={titleDefaultOptions}/>
        </div>
        <div className={styles.animation}>
          <Lottie animationData={NikeLogo} options={titleDefaultOptions}/>
        </div>
      </div>

    </main>
  )
}
