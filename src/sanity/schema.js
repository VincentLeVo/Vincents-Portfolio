import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { projectType } from './types/project'

export const schema = {
  types: [blockContentType, categoryType, projectType, authorType],
}
