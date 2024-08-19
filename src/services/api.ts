import type { EmployeeCardType, ProjectCardType } from 'src/utils/types'
import { mockEmployeeCardsData } from 'src/utils/mock/mockEmployeeCardsData'
import { mockProjectCardsData } from 'src/utils/mock/mockProjectCardsData'


export const getEmployeeCardsData = async () => {
  const employeeCardsDataFromServer: EmployeeCardType = mockEmployeeCardsData
  const res = await Promise.resolve(employeeCardsDataFromServer)

  return res
}

export const getProjectCardsData = async () => {
  const projectCardsDataFromServer: Array<ProjectCardType> = mockProjectCardsData
  const res = await Promise.resolve(projectCardsDataFromServer)

  return res
}
