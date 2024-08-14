import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import Avatar from 'src/assets/images/content/avatar.jpg'
import styles from './Header.module.scss'

const { Text } = Typography

const Header: FC = () => {
  const name = 'Екатерина'
  const lastname = 'Смирнова'
  return (
    <header className={styles.header}>
      <Link to='/' reloadDocument className={styles.logo}>
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

export default Header
