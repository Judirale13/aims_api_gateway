import { Category, Grade, CategoryInput, GradeInput } from '@/schemas/grading'
import { getInstance } from '@/configs/axios'

const gradingInstance = getInstance('grading')

export const createCategory = async (category: CategoryInput): Promise<Category> => {
  const { data } = await gradingInstance.post('/categories', category)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const createGrade = async (grade: GradeInput): Promise<Grade> => {
  const { data } = await gradingInstance.post('/grades', grade)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const getCategories = async (
  { groupId, subjectCode }: { groupId?: string, subjectCode?: string } = {}
): Promise<Category[]> => {
  let url = '/categories?'

  if (groupId != null) { url += `group_id=${groupId}&` }
  if (subjectCode != null) { url += `subject_code=${subjectCode}&` }

  const { data } = await gradingInstance.get(url)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const getGrades = async (
  { categoryId, studentId }: { categoryId?: string, studentId?: string } = {}
): Promise<Grade[]> => {
  let url = '/grades?'

  if (categoryId != null) { url += `category_id=${categoryId}&` }
  if (studentId != null) { url += `student_id=${studentId}&` }

  const { data } = await gradingInstance.get(url)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const updateCategory = async (category: CategoryInput, categoryId: string): Promise<Category> => {
  const { data } = await gradingInstance.put(`/categories/${categoryId}`, category)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const updateGrade = async (grade: GradeInput, gradeId: string): Promise<Grade> => {
  const { data } = await gradingInstance.put(`/grades/${gradeId}`, grade)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const deleteCategory = async (id: string): Promise<Category> => {
  const { data } = await gradingInstance.delete(`/categories/${id}`)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const deleteGrade = async (id: string): Promise<Grade> => {
  const { data } = await gradingInstance.delete(`/grades/${id}`)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const getGrade = async (id: string): Promise<Grade> => {
  const { data } = await gradingInstance.get(`/grades/${id}`)

  return await new Promise((resolve) => { resolve(data.data) })
}

export const getCategory = async (id: string): Promise<Category> => {
  const { data } = await gradingInstance.get(`/categories/${id}`)

  return await new Promise((resolve) => { resolve(data.data) })
}
