import type { ComponentProps } from 'react'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'

export interface FormInputProps<T extends FieldValues>
  extends Omit<ComponentProps<'input'>, 'name'> {
  required?: boolean
  control: Control<T>
  label?: string
  description?: string
  name: FieldPath<T>
}
