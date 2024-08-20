import { CSSProperties, FC, useState, useEffect } from 'react'
import { Row, Col, Button, Flex } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import {
  fetchEmployeeCardsData,
  selectEmployee,
} from 'src/services/slices/employeeSlice'
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const buttonStyle: CSSProperties = {
  width: 224,
  height: 48,
  borderRadius: 12,
  border: '2px solid #C7E2FF',
  boxSizing: 'border-box',
  color: '#003A8C',
  backgroundColor: 'rgba(199, 226, 255, 0.30)',
  boxShadow: 'none',
}

const EmployeesTree: FC = () => {
  const [collapsed, setCollapsed] = useState({
    departments: [
      { department: 'Разработка', hidden: true },
      { department: 'Архитектура', hidden: true },
      { department: 'ИБ', hidden: true },
      { department: 'Аналитика', hidden: true },
      { department: 'Инфраструктура', hidden: true },
    ],
  })

  const dispatch = useAppDispatch()
  const { employee } = useAppSelector(selectEmployee)

  useEffect(() => {
    dispatch(fetchEmployeeCardsData())
  }, [dispatch])

  const handleCollapse = (department: string | unknown) => {
    setCollapsed(prevState => ({
      departments: prevState.departments.map(obj =>
        obj.department === department
          ? Object.assign(obj, { hidden: !obj.hidden })
          : obj
      ),
    }))
  }

  const gap = self.innerWidth <= 1460 ? 14 : 22

  return (
    <section style={sectionStyle}>
      <Row gutter={70} justify='center'>
        <Col flex='224px' style={{ marginBottom: '48px' }}>
          <EmployeeCard data={employee} isLead />
        </Col>
      </Row>
      <Row gutter={gap} justify='center'>
        {employee.subordinates.map(lead => (
          <Col key={`${lead.id}-${uuidv4()}`}>
            <Flex vertical gap={gap}>
              <EmployeeCard data={lead} isLead />
              <Button
                onClick={() => handleCollapse(lead.department)}
                style={buttonStyle}
              >
                {lead.department}
              </Button>
              <Flex
                vertical
                gap={8}
                style={{
                  height: `${
                    !!collapsed.departments.find(
                      obj => obj.department === lead.department
                    )?.hidden
                      ? 0
                      : `${
                          lead.subordinates.length * 140 +
                          8 * (lead.subordinates.length - 1)
                        }px`
                  }`,
                  overflowY: 'hidden',
                  transition: 'height 0.3s cubic-bezier(0.2, 0, 0, 1) 0s',
                }}
              >
                {lead.subordinates.map(subordinate => (
                  <EmployeeCard
                    data={subordinate}
                    key={`${subordinate.id}-${uuidv4()}`}
                  />
                ))}
              </Flex>
            </Flex>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default EmployeesTree
