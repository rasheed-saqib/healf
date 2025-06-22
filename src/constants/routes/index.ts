const ROOT = '/'

// entities
const HOME = ''
const PROJECTS = 'projects'
const PRODUCTS = 'products'

// actions
const CREATE = 'create'

export const ABSOLUTE_ROUTES = {
  HOME: `${ROOT}${HOME}`,

  // projects
  CREATE_PROJECT: `${ROOT}${PROJECTS}/${CREATE}`,

  // products
  PRODUCTS: `${ROOT}${PRODUCTS}`,
  getProduct: (id: string) => `${ROOT}${PRODUCTS}/${id}`
} as const
