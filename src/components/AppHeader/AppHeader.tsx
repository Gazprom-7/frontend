import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import Avatar from 'src/assets/images/mock/avatar1.jpg'
import styles from './AppHeader.module.scss'

const { Header } = Layout
const { Text } = Typography

const AppHeader: FC = () => {
  const name = 'Екатерина'
  const lastname = 'Смирнова'
  return (
    <header className={styles.header}>
      <Link to='/structure' reloadDocument className={styles.logo}>
        <div className={styles.logoIcon} />
        <p className={styles.logoText}>Газпром оператор ID</p>
      </Link>
      <Link to='/profile' reloadDocument className={styles.profile}>
        <img
          src={Avatar}
          alt={`Аватар пользователя ${name} ${lastname}`}
          className={styles.profileImage}
        />
        <Text>Екатерина Смирнова</Text>
      </Link>
    </header>
  )
}

export default AppHeader
