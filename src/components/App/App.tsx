import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import AppHeader from 'src/components/AppHeader/AppHeader'
import AppContent from 'src/components/AppContent/AppContent'
import EmployeeInfo from '../EmployeeInfo/EmployeeInfo'
import styles from './App.module.scss'

const App: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/structure')
  }, [])

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
        <EmployeeInfo />
      </ConfigProvider>
    </div>
  )
}

export default App
