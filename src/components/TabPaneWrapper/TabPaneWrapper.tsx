import { ReactNode, FC } from 'react'
import type { TabPaneProps } from 'antd'
import { Layout } from 'antd'

const { Content } = Layout

interface TabPaneWrapperProps extends TabPaneProps {
  children: ReactNode
}

const TabPaneWrapper: FC<TabPaneWrapperProps> = ({ children, ...props }) => {
  return (
    <Content style={props.style} {...props}>
      {children}
    </Content>
  )
}

export default TabPaneWrapper
