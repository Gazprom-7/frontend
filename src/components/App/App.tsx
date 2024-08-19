import { FC } from 'react'
import { ConfigProvider, Layout } from 'antd'
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
        {/* <Layout> */}
        <AppHeader />
        <AppContent />
        {/* </Layout> */}
      </ConfigProvider>
    </div>
  )
}

export default App
