'use client'

import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps, type FC, type ReactElement, useId } from 'react'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider
} from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { cn } from '@/utils/cn'

import { FormFieldContext, FormItemContext, useFormField } from './form.store'

const Form = FormProvider

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>): ReactElement => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const FormItem: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

const FormLabel: FC<ComponentProps<typeof LabelPrimitive.Root>> = ({
  className,
  ...props
}) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={error != null}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

const FormControl: FC<ComponentProps<typeof Slot>> = ({ ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        error == null
          ? formDescriptionId
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={error != null}
      {...props}
    />
  )
}

const FormDescription: FC<ComponentProps<'p'>> = ({ className, ...props }) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

const FormMessage: FC<ComponentProps<'p'>> = ({ className, ...props }) => {
  const { error, formMessageId } = useFormField()
  const body = error == null ? props.children : (error?.message ?? '')

  if (body == null) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
}

export { useFormField } from './form.store'
