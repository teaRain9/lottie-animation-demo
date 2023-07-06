'use client'

import styles from './page.module.css'
import * as collaborationAnimation from '../assets/Collab_Animation.json'
import Lottie from 'lottie-react'

export default function Home() {

  const collaborationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: collaborationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Sandbox Redesign - Animation Demo</h1>
      <div className={styles.animation}>
        <Lottie animationData={collaborationAnimation} options={collaborationDefaultOptions}/>
      </div>

      <div className={styles.container}>
        <p>Condimentum vitae sapien pellentesque habitant morbi. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Pharetra sit amet aliquam id diam maecenas ultricies mi. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Consectetur adipiscing elit ut aliquam. Tellus rutrum tellus pellentesque eu. Ut aliquam purus sit amet luctus venenatis lectus magna. Egestas sed sed risus pretium.</p>
        <p>Ullamcorper dignissim cras tincidunt lobortis. Lectus proin nibh nisl condimentum. Arcu felis bibendum ut tristique et egestas quis ipsum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. At tempor commodo ullamcorper a lacus vestibulum.</p>
      </div>

    </main>
  )
}
