import { CSSProperties, FC, useEffect } from 'react'
import { Row, Col } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from 'src/services/hooks'
import {
  fetchProjectCardsData,
  selectProjects,
} from 'src/services/slices/projectsSlice'
import ProjectCard from 'src/components/ProjectCard/ProjectCard'

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const Projects: FC = () => {
  const dispatch = useAppDispatch()
  const { projects } = useAppSelector(selectProjects)

  useEffect(() => {
    dispatch(fetchProjectCardsData())
  }, [dispatch])

  const span = Math.floor((self.innerWidth - 244) / 292)

  return (
    <section style={sectionStyle}>
      <Row gutter={[20, 20]} style={{ maxWidth: `calc(292px * ${span})` }}>
        {projects.map(project => (
          <Col
            flex='292px'
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={8}
            xxl={6}
            key={`${project.id}-${uuidv4()}`}
          >
            <ProjectCard details={project} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Projects
