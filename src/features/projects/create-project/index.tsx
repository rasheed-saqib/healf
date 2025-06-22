'use client'

import Link from 'next/link'
import type { FC } from 'react'

import { FileInput } from '@/components/file-input'
import { FormInput } from '@/components/form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { ABSOLUTE_ROUTES } from '@/constants/routes'
import { ProjectSchemaKeys } from '@/schemas/project'

import { FilePreview } from './file-preview'
import { useCreateProject } from './use-create-project'

export const CreateProject: FC = () => {
  const { dropzone, form, onSubmit } = useCreateProject()

  return (
    <Form {...form}>
      <form
        className="mx-auto max-w-4xl space-y-8 px-6 py-[60px] sm:px-12 md:px-24 lg:px-[120px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <h1 className="text-xl font-semibold text-neutral-950">
            Start a New Project
          </h1>
          <p className="text-sm text-neutral-400">
            Drop Your CSV Here to Ignite the Magic 🪄
          </p>
        </div>

        <FormInput
          control={form.control}
          name={ProjectSchemaKeys.NAME}
          label="Project Name"
          type="text"
          placeholder="My Awesome Project"
          disabled={form.formState.isSubmitting}
        />

        <FormField
          name={ProjectSchemaKeys.FILE}
          render={() => (
            <FormItem>
              <FormLabel>CSV File:</FormLabel>
              <FormControl>
                <FileInput dropzone={dropzone} />
              </FormControl>
              <FormDescription>Supported format: CSV</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FilePreview form={form} />

        <div className="flex w-full justify-end gap-2">
          <Button variant="ghost" asChild>
            <Link href={ABSOLUTE_ROUTES.HOME}>Cancel</Link>
          </Button>

          <Button type="submit">Start Magic ✨</Button>
        </div>
      </form>
    </Form>
  )
}
