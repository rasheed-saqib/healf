import { createContext, useContext } from 'react'
import { type FieldError, useFormContext, useFormState } from 'react-hook-form'

import type { FormFieldContextValue, FormItemContextValue } from './form.types'

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

export const useFormField = (): {
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  isValidating: boolean
  error?: FieldError
} => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (fieldContext == null) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}
