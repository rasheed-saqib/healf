'use client'

import Link from 'next/link'
import type { FC } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { FileInput } from '@/components/file-input'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { ABSOLUTE_ROUTES } from '@/constants/routes'
import { ProjectSchemaKeys, type ProjectSchemaType } from '@/schemas/project'

import { CreateProjectTab } from '../create-project.constants'
import { FilePreview } from './file-preview'
import { useFileTab } from './use-file-tab'

interface FileTabProps {
  form: UseFormReturn<ProjectSchemaType>
  setTab: (tab: CreateProjectTab) => void
}

export const FileTab: FC<FileTabProps> = ({ form, setTab }) => {
  const { dropzone, file } = useFileTab({ form })

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold text-zinc-950">
          Project Files (1 of 2)
        </h1>
        <p className="text-sm text-zinc-600">
          Drag and drop your CSV here, and let us handle the rest. We’ll turn
          your raw data into a structured product catalog.
        </p>
      </div>

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

        <Button
          type="button"
          className="w-[120px]"
          disabled={file == null}
          onClick={() => {
            setTab(CreateProjectTab.KEYS_TAB)
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
