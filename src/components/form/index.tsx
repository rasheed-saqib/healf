import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import type { FormInputProps } from './form.types'

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  type,
  required = false,
  ...props
}: FormInputProps<T>): ReactElement => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label != null && (
            <FormLabel>
              {label}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input type={type} {...props} {...field} />
          </FormControl>
          {description != null && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
