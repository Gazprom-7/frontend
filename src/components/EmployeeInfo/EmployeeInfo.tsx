import { CSSProperties, FC } from 'react'
import { Flex, Avatar, Typography, Tag, Button } from 'antd'
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { useAppSelector } from 'src/services/hooks'
import { selectEmployee } from 'src/services/slices/employeeSlice'
import Info from 'src/components/Info/Info'

const containerStyle: CSSProperties = {
  height: 'calc(100vh - 224px)',
  overflowY: 'scroll',
}

const avatarStyle: CSSProperties = {
  width: 160,
  height: 160,
  display: 'block',
  border: 'none',
  alignSelf: 'center',
  backgroundColor: '#096DD9',
  margin: '0 auto 24px',
}

const nameStyle: CSSProperties = {
  fontWeight: 500,
  margin: '0 0 16px',
}

const subtitleStyle: CSSProperties = {
  color: '#002766',
  margin: '0 0 16px',
}

const textStyle: CSSProperties = {
  color: '#262626',
}

const borderedStyle: CSSProperties = {
  maxHeight: 32,
  padding: '5px 16px',
  boxSizing: 'border-box',
  border: '1px solid #D9D9D9',
  borderRadius: 2,
  color: '#262626',
}

const buttonStyle: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 8,
  color: '#434343',
  backgroundColor: '#F0F0F0',
  boxShadow: 'none',
}

const contactStyle: CSSProperties = {
  maxHeight: 32,
  padding: '5px 12px',
  boxSizing: 'border-box',
  border: '1px solid #F5F5F5',
  borderRadius: 2,
  color: '#262626',
}

const { Title, Text } = Typography

const EmployeeInfo: FC = () => {
  const { isInfoOpen, employeeById } = useAppSelector(selectEmployee)

  const {
    name,
    lastname,
    image,
    available,
    status,
    position,
    workFormat,
    workTime,
    city,
    lead,
    teams,
    projects,
    achievements,
    skills,
    contacts,
  } = employeeById

  const statusColor = available
    ? 'green'
    : status?.description === 'В командировке'
    ? 'blue'
    : status?.description === 'В отпуске'
    ? 'orange'
    : 'cyan'

  return (
    <Info isOpen={isInfoOpen}>
      <Avatar src={image} icon={<UserOutlined />} style={avatarStyle} />
      <Flex vertical align='flex-start' gap={24} style={containerStyle}>
        <div>
          <Title level={4} style={nameStyle}>{`${name} ${lastname}`}</Title>
          <Tag color={statusColor}>
            {available ? 'Доступен' : status?.description}
          </Tag>
        </div>
        <div>
          <Title level={5} style={subtitleStyle}>
            {position}
          </Title>
          <Flex vertical align='flex-start' gap={16}>
            <Text style={textStyle}>{`${workFormat}: ${workTime}`}</Text>
            <Text style={textStyle}>{city}</Text>
          </Flex>
        </div>
        <div>
          <Title level={5} style={subtitleStyle}>
            Руководитель
          </Title>
          <Text style={textStyle}>{`${lead.name} ${lead.lastname}`}</Text>
        </div>
        <div>
          <Title level={5} style={subtitleStyle}>
            Команды
          </Title>
          <Flex vertical gap={4}>
            {!!teams?.length
              ? teams?.map(team => (
                  <Text key={team.id} style={borderedStyle}>
                    {team.name}
                  </Text>
                ))
              : 'Нет команд'}
          </Flex>
        </div>
        <div>
          <Title level={5} style={subtitleStyle}>
            Проекты
          </Title>
          <Flex gap={4} wrap>
            {!!projects?.length
              ? projects?.map(project => (
                  <Text key={project.id} style={borderedStyle}>
                    {project.name}
                  </Text>
                ))
              : 'Нет проектов'}
          </Flex>
        </div>
        {!!achievements?.length && (
          <div>
            <Title level={5} style={subtitleStyle}>
              Достижения
            </Title>
            <Flex gap={4} wrap>
              {achievements?.map((achievement, index) => (
                <Text key={`${achievement}-${index}`} style={borderedStyle}>
                  {achievement}
                </Text>
              ))}
            </Flex>
          </div>
        )}
        <div>
          <Title level={5} style={subtitleStyle}>
            Стек навыков
          </Title>
          <Flex gap={4} wrap>
            {skills.core.map((skill, index) => (
              <Text key={`${skill}-${index}`} style={borderedStyle}>
                {skill}
              </Text>
            ))}
          </Flex>
        </div>
        <Flex vertical gap={16}>
          <Title level={5} style={subtitleStyle}>
            Контакты
          </Title>
          <Flex gap={4}>
            <Button
              type='primary'
              icon={<MailOutlined />}
              style={buttonStyle}
            />
            <Text style={contactStyle}>{contacts.email}</Text>
          </Flex>
          <Flex gap={4}>
            <Button
              type='primary'
              icon={<PhoneOutlined />}
              style={buttonStyle}
            />
            <Text style={contactStyle}>{contacts.phone}</Text>
          </Flex>
          <Flex gap={4}>
            <Button
              type='primary'
              icon={<SendOutlined />}
              style={buttonStyle}
            />
            <Text style={contactStyle}>{contacts.chat}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Info>
  )
}

export default EmployeeInfo
