import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Navigation from 'src/components/Navigation/Navigation'

const { Content } = Layout

const AppContent: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content
        style={{
          minHeight: 'calc(100vh - 48px)',
          marginTop: 48,
          marginLeft: collapsed ? 46 : 220,
          transition: 'margin 0.3s cubic-bezier(0.2, 0, 0, 1) 0s',
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AppContent
