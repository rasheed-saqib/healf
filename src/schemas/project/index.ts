import { z } from 'zod'

export const ProjectSchemaKeys = {
  FILE: 'files',
  KEYS: 'keys'
} as const

const FileSchema = z
  .instanceof(File, {
    message: 'File is required'
  })
  .refine(file => file.type === 'text/csv', {
    message: 'Please upload a valid CSV file'
  })

export const KeysSchema = z
  .record(
    z.string().min(1, { message: 'Key cannot be empty' }),
    z.string().min(1, { message: 'Value cannot be empty' })
  )
  .refine(
    data => {
      const keys = Object.keys(data)
      const values = Object.values(data)
      return (
        new Set(keys).size === keys.length &&
        new Set(values).size === values.length
      )
    },
    {
      message: 'Keys and values must be unique'
    }
  )

export const ProjectSchema = z.object({
  [ProjectSchemaKeys.FILE]: FileSchema,
  [ProjectSchemaKeys.KEYS]: KeysSchema
})

export type ProjectSchemaType = z.infer<typeof ProjectSchema>
