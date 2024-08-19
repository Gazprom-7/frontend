import { CSSProperties, FC } from 'react'
import { Card, Avatar, Typography, Tag, Flex, Button } from 'antd'
import { UserOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import type { EmployeeCardType } from 'src/utils/types'

const leadCardStyle: CSSProperties = {
  width: 224,
  minHeight: 122,
  borderRadius: 12,
  borderColor: '#D9D9D9',
  position: 'relative',
}

const leadBodyStyle: CSSProperties = {
  padding: '28px 32px 20px',
}

const leadAvatarStyle: CSSProperties = {
  width: 48,
  height: 48,
  border: 0,
  backgroundColor: '#096DD9',
  position: 'absolute',
  top: -24,
  left: '50%',
  transform: 'translateX(-50%)',
}

const leadTitleStyle: CSSProperties = {
  fontWeight: 500,
  margin: 0,
}

const leadTextStyle: CSSProperties = {
  display: 'block',
  color: '#595959',
}

const leadSecondaryTextStyle: CSSProperties = {
  display: 'block',
  fontSize: 12,
  lineHeight: '20px',
}

const leadTagStyle: CSSProperties = {
  minWidth: 24,
  height: 20,
  border: 0,
  margin: 0,
  textAlign: 'center',
  color: '#FFFFFF',
  backgroundColor: '#096DD9',
  position: 'absolute',
  bottom: -10,
  left: '50%',
  transform: 'translateX(-50%)',
}

const cardStyle: CSSProperties = {
  width: 224,
  minHeight: 140,
  padding: '28px 16px 20px',
  borderRadius: 12,
  borderColor: '#D9D9D9',
}

const headerStyle: CSSProperties = {
  padding: '0px 0px 8px',
  borderColor: '#D9D9D9',
}

const bodyStyle: CSSProperties = {
  padding: '8px 0 0',
}

const avatarStyle: CSSProperties = {
  width: 34,
  height: 34,
  border: 0,
  backgroundColor: '#096DD9',
}

const textStyle: CSSProperties = {
  maxWidth: 145.5,
  display: 'block',
  fontWeight: 500,
  lineHeight: '21px',
}

const secondaryTextStyle: CSSProperties = {
  maxWidth: 145.5,
  display: 'block',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#595959',
}

const buttonStyle: CSSProperties = {
  width: 32,
  height: 32,
  color: '#434343',
  backgroundColor: '#F0F0F0',
  boxShadow: 'none',
}

const { Title, Text } = Typography

interface EmployeeCardProps {
  data: EmployeeCardType
  isLead?: boolean
}

const EmployeeCard: FC<EmployeeCardProps> = ({ data, isLead = false }) => {
  const { id, name, lastname, image, position, city, subordinates } = data

  return isLead ? (
    <Card
      key={`${id}-${uuidv4()}`}
      hoverable
      size='small'
      style={leadCardStyle}
      styles={{
        body: leadBodyStyle,
      }}
    >
      <Flex vertical gap={4} align='center'>
        <Avatar
          src={image}
          icon={<UserOutlined />}
          size='large'
          style={leadAvatarStyle}
        />
        <Title
          level={5}
          style={leadTitleStyle}
          ellipsis
        >{`${name} ${lastname}`}</Title>
        <Text strong style={leadTextStyle}>
          {position}
        </Text>
        <Text type='secondary' style={leadSecondaryTextStyle}>
          {city}
        </Text>
        <Tag style={leadTagStyle}>{subordinates.length}</Tag>
      </Flex>
    </Card>
  ) : (
    <Card
      key={`${id}-${uuidv4()}`}
      hoverable
      title={
        <Flex align='flex-start' gap={12.5}>
          <Avatar src={image} icon={<UserOutlined />} style={avatarStyle} />
          <div>
            <Text style={textStyle} ellipsis>{`${name} ${lastname}`}</Text>
            <Text type='secondary' style={secondaryTextStyle} ellipsis>
              {position}
            </Text>
          </div>
        </Flex>
      }
      size='small'
      style={cardStyle}
      styles={{
        header: headerStyle,
        body: bodyStyle,
      }}
    >
      <Flex align='center' justify='space-between'>
        <Text type='secondary' style={secondaryTextStyle} ellipsis>
          {city}
        </Text>
        <Flex gap={4}>
          <Button type='primary' icon={<PhoneOutlined />} style={buttonStyle} />
          <Button type='primary' icon={<SendOutlined />} style={buttonStyle} />
        </Flex>
      </Flex>
    </Card>
  )
}

export default EmployeeCard
