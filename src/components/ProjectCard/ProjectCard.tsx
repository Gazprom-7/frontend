import { CSSProperties, FC } from 'react'
import { ConfigProvider, Typography, Card, Button, Flex } from 'antd'
import {
  EllipsisOutlined,
  PhoneOutlined,
  SendOutlined,
} from '@ant-design/icons'
import type { ProjectCardType } from 'src/utils/types'

const cardStyle: CSSProperties = {
  width: 272,
  minHeight: 122,
  padding: 12,
  borderRadius: 12,
  borderColor: '#D9D9D9',
}

const cardHeaderStyle: CSSProperties = {
  padding: 0,
  fontWeight: 500,
  lineHeight: '24px',
  borderColor: '#D9D9D9',
}

const cardBodyStyle: CSSProperties = {
  padding: '16px 0 12px',
}

const cardExtraStyle: CSSProperties = {
  height: 18,
}

const cardTextStyle: CSSProperties = {
  display: 'block',
}

const cardSecondaryTextStyle: CSSProperties = {
  display: 'block',
  fontSize: 12,
  lineHeight: '20px',
}

const ellipsisStyle: CSSProperties = {
  width: 16,
  height: 16,
  padding: '1px',
}

const buttonStyle: CSSProperties = {
  width: 35,
  height: 35,
  borderRadius: 8,
  color: '#434343',
  backgroundColor: '#F0F0F0',
  boxShadow: 'none',
}

const { Text } = Typography

interface ProjectCardProps {
  details: ProjectCardType
}

const ProjectCard: FC<ProjectCardProps> = ({ details }) => {
  const { name, lead } = details
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerHeightSM: 28,
            headerFontSizeSM: 16,
          },
        },
      }}
    >
      <Card
        hoverable
        title={name}
        size='small'
        style={cardStyle}
        styles={{
          header: cardHeaderStyle,
          body: cardBodyStyle,
          extra: cardExtraStyle,
        }}
        extra={
          <Button type='text' style={ellipsisStyle}>
            <EllipsisOutlined />
          </Button>
        }
      >
        <Flex justify='space-between'>
          <div>
            <Text style={cardTextStyle}>{`${lead.lastname} ${lead.name}`}</Text>
            <Text type='secondary' style={cardSecondaryTextStyle}>
              Руководитель проекта
            </Text>
          </div>
          <Flex gap={4}>
            <Button
              type='primary'
              icon={<PhoneOutlined />}
              style={buttonStyle}
            />
            <Button
              type='primary'
              icon={<SendOutlined />}
              style={buttonStyle}
            />
          </Flex>
        </Flex>
      </Card>
    </ConfigProvider>
  )
}

export default ProjectCard
