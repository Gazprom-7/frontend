import { CSSProperties, FC } from 'react'
import type { TabsProps } from 'antd'
import { ConfigProvider, Layout, Typography, Tabs } from 'antd'
import TabPaneWrapper from 'src/components/TabPaneWrapper/TabPaneWrapper'
import Projects from 'src/components/Projects/Projects'
import EmployeesTree from 'src/components/EmployeesTree/EmployeesTree'

const layoutStyle: CSSProperties = {
  backgroundColor: '#FFFFFF',
}

const titleStyle: CSSProperties = {
  fontWeight: 500,
  marginTop: 22,
  marginLeft: 22,
}

const tabPaneStyle: CSSProperties = {
  height: 'calc(100vh - 161.14px)',
  backgroundColor: '#F0F2F5',
  padding: '24px 12px',
  overflowY: 'scroll',
}

const items: TabsProps['items'] = [
  {
    key: '/departments',
    label: 'Департаменты',
    children: (
      <TabPaneWrapper style={tabPaneStyle}>
        <EmployeesTree />
      </TabPaneWrapper>
    ),
  },
  {
    key: '/projects',
    label: 'Проекты',
    children: (
      <TabPaneWrapper style={tabPaneStyle}>
        <Projects />
      </TabPaneWrapper>
    ),
  },
]

const { Title } = Typography

const StructurePage: FC = () => {
  const onChange = (key: string) => {}

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginBottom: 6,
          },
          Tabs: {
            horizontalMargin: '0px 0px 0px 22px',
          },
        },
      }}
    >
      <Layout style={layoutStyle}>
        <Title level={4} style={titleStyle}>
          Структура
        </Title>
        <Tabs
          defaultActiveKey='/departments'
          size='large'
          items={items}
          onChange={onChange}
        />
      </Layout>
    </ConfigProvider>
  )
}

export default StructurePage
