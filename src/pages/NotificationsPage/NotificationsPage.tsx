import { FC } from 'react'
import Loader from 'src/components/Loader/Loader'
import styles from './NotificationsPage.module.scss'

const NotificationsPage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    </main>
  )
}

export default NotificationsPage
