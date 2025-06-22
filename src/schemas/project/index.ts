import { z } from 'zod'

export const ProjectSchemaKeys = {
  NAME: 'name',
  FILE: 'files'
} as const

const NameSchema = z
  .string({
    required_error: 'Project name is required'
  })
  .min(1, {
    message: 'Project name must be at least 1 character long'
  })
  .max(100, {
    message: 'Project name must be at most 100 characters long'
  })

const FileSchema = z
  .instanceof(File, {
    message: 'File is required'
  })
  .refine(file => file.type === 'text/csv', {
    message: 'Please upload a valid CSV file'
  })

export const ProjectSchema = z.object({
  [ProjectSchemaKeys.NAME]: NameSchema,
  [ProjectSchemaKeys.FILE]: FileSchema
})

export type ProjectSchemaType = z.infer<typeof ProjectSchema>
