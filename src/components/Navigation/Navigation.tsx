import { CSSProperties, Dispatch, SetStateAction, FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ConfigProvider, Layout, Menu, Divider, Button } from 'antd'
import type { GetProp, MenuProps } from 'antd'
import {
  ClusterOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'

const siderStyle: CSSProperties = {
  position: 'fixed',
  insetInlineStart: 0,
  top: 48,
  bottom: 0,
  zIndex: 10,
}

const menuStyle: CSSProperties = {
  height: 'calc(100vh - 48px)',
}

const menuItemStyle: CSSProperties = {
  paddingLeft: 16,
}

const menuLastItemStyle: CSSProperties = {
  width: 46,
  paddingLeft: 16,
  position: 'absolute',
  left: 0,
  bottom: 0,
}

const dividerStyle: CSSProperties = {
  height: 'calc(100vh - 48px)',
  position: 'absolute',
  left: 38,
  top: 0,
  bottom: 0,
}

const triggerStyle: CSSProperties = {
  width: 14,
  height: 66,
  border: 0,
  borderColor: 'transparent',
  borderRadius: 0,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  backgroundImage: 'url(src/assets/images/decor/trapezoid.svg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 'calc(50% - 66px)',
  right: -12,
}

type MenuItem = GetProp<MenuProps, 'items'>[number]

const items: MenuItem[] = [
  {
    key: '/structure',
    icon: <ClusterOutlined />,
    label: 'Структура',
    style: menuItemStyle,
  },
  {
    key: '/search',
    icon: <SearchOutlined />,
    label: 'Поиск',
    style: menuItemStyle,
  },
  {
    key: '/notifications',
    icon: <BellOutlined />,
    label: 'Уведомления',
    style: menuItemStyle,
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    style: menuLastItemStyle,
  },
]

interface NavigationProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

const Navigation: FC<NavigationProps> = ({ collapsed, setCollapsed }) => {
  const { Sider } = Layout
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            onlyIconSizeSM: 10,
          },
          Menu: {
            itemColor: 'rgba(0, 0, 0, 0.85)',
            itemActiveBg: '#E6F4FF',
            itemSelectedBg: '#E6F7FF',
            itemSelectedColor: '#1890FF',
            itemHoverBg: 'transparent',
            itemHoverColor: '#1890FF',
            itemPaddingInline: 16,
            itemMarginBlock: 0,
            itemMarginInline: 0,
            itemBorderRadius: 0,
            iconMarginInlineEnd: 36,
            iconSize: 14,
            collapsedIconSize: 16,
          },
        },
      }}
    >
      <Sider
        width='220'
        collapsedWidth='47'
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={siderStyle}
      >
        <Menu
          mode='inline'
          defaultSelectedKeys={[pathname]}
          onClick={({ key }) => {
            if (key === 'logout') {
              // logout
            } else {
              navigate(key)
            }
          }}
          items={items}
          style={menuStyle}
        />
        {!collapsed && <Divider type='vertical' style={dividerStyle} />}
        <Button
          type='default'
          size='small'
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={toggleCollapsed}
          style={triggerStyle}
        />
      </Sider>
    </ConfigProvider>
  )
}

export default Navigation
