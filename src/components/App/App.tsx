import { FC } from 'react'
import { ConfigProvider } from 'antd'
import AppHeader from 'src/components/AppHeader/AppHeader'
import AppContent from 'src/components/AppContent/AppContent'
import styles from './App.module.scss'

const App: FC = () => {
  return (
    <div className={styles.app}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Roboto',
          },
        }}
      >
        <AppHeader />
        <AppContent />
      </ConfigProvider>
    </div>
  )
}

export default App
