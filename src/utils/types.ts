export interface UserType {
  id: number
  token: string
  name: string
  lastname: string
  image: string | null
}

export interface EmployeeCardType {
  id: number
  name: string
  lastname: string,
  image: string | null
  position: string,
  city: string,
  department?: string,
  subordinates: EmployeeCardType[]
}

export interface ProjectCardType {
  id: number
  name: string
  lead: {
    id: number
    name: string
    lastname: string
  }
  teams: {
    id: number
    name: string
    departments: string[]
  }[]
}

export interface ProjectType {
  id: number
  name: string
  foto: string
  description: string
  leader: {
    id: number
    name: string
    lastname: string
    foto: string
  }
  departments: {
    id: number
    name: string
  }[]
  teams: {
    id: number
    name: string
  }[]
}

export interface TeamType {
  id: number
    name: string
  department: string,
  leader: {
    id: number
    name: string
    lastname: string
    foto: string
  }[]
  members: {
    id: number
    name: string
    lastname: string
    foto: string
  }[]
}
