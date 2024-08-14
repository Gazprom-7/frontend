import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Header from 'src/components/Header/Header'
import styles from './App.module.scss'

const App: FC = () => {
  return (
    <div className={styles.app}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Roboto',
            colorPrimary: 'rgba(black, 0.85)',
          },
        }}
      >
        <Header />
        <Outlet />
      </ConfigProvider>
    </div>
  )
}

export default App
