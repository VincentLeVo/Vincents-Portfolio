import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { projectType } from './projectType'

export const schema = {
  types: [blockContentType, categoryType, projectType, authorType],
}
