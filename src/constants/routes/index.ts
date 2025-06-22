const ROOT = '/'

// entities
const HOME = ''
const PROJECTS = 'projects'

// actions
const CREATE = 'create'

export const ABSOLUTE_ROUTES = {
  HOME: `${ROOT}${HOME}`,

  // projects
  PROJECTS: `${ROOT}${PROJECTS}`,
  CREATE_PROJECT: `${PROJECTS}/${CREATE}`
} as const
