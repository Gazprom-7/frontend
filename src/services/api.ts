import type { EmployeeCardType, EmployeeType, ProjectCardType } from 'src/utils/types'
import { mockEmployeeCardsData } from 'src/utils/mock/mockEmployeeCardsData'
import { mockEmployeesData } from 'src/utils/mock/mockEmployeesData'
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

export const getEmployeeById = async (id: number) => {
  const employeesDataFromServer: Array<EmployeeType> = mockEmployeesData
  const res = await Promise.resolve(
    employeesDataFromServer.find(element => element.id === id)
  )

  return res
}
