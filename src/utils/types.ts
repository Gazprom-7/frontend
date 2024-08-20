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
  lastname: string
  image: string | null
  position: string
  city: string
  department?: string
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

export interface EmployeeType {
  id: number
  name: string
  lastname: string
  image: string | null
  position: string
  staff: boolean
  available: boolean
  status?: {
    description: string
    date: string
    replacement: {
      id: number
      name: string
      lastname: string
    }
  }
  workFormat: string
  workTime: string
  city: string
  contacts: {
    phone: string
    mobile?: string
    email: string
    chat: string
  }
  lead: {
    id: number
    name: string
    lastname: string
  }
  teams?: {
    id: number
    name: string
  }[]
  projects?: {
    id: number
    name: string
    description: string
    lead: {
      id: number
      name: string
      lastname: string
      image: string
    }
  }[]
  education: {
    base: {
      degree: string
      organization: string
      year: number
    }
    additional?: {
      degree: string
      organization: string
      year: number
    }[]
  }
  skills: {
    core: string[]
    languages: string[]
  }
  interests: string[]
  achievements: string[]
  about: string
  favorites: {
    id: number
    name: string
    lastname: string
    image: string
    position: string
    department?: string
  }[]
}

export interface ProjectType {
  id: number
  name: string
  description: string
  image: string
  progress: number
  lead: {
    id: number
    name: string
    lastname: string
    image: string
  }
  teams: {
    id: number
    name: string
  }[]
  departments: string[]
}

export interface TeamType {
  id: number
  name: string
  lead: {
    id: number
    name: string
    lastname: string
    image: string
  }
  members: {
    id: number
    name: string
    lastname: string
    image: string
  }[]
  departments: string[]
}
