'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { type DropzoneState, useDropzone } from 'react-dropzone'
import {
  type SubmitHandler,
  useForm,
  type UseFormReturn,
  useWatch
} from 'react-hook-form'
import { toast } from 'sonner'

import { ABSOLUTE_ROUTES } from '@/constants/routes'
import {
  ProjectSchema,
  ProjectSchemaKeys,
  type ProjectSchemaType
} from '@/schemas/project'

interface UseCreateProjectReturn {
  dropzone: DropzoneState
  form: UseFormReturn<ProjectSchemaType>
  onSubmit: SubmitHandler<ProjectSchemaType>
}

export const useCreateProject = (): UseCreateProjectReturn => {
  const router = useRouter()

  const form = useForm<ProjectSchemaType>({
    resolver: zodResolver(ProjectSchema)
  })

  const dropzone = useDropzone({
    maxFiles: 1,
    accept: {
      'text/csv': []
    },
    disabled: form.formState.isSubmitting,
    noKeyboard: true,
    noClick: true,
    multiple: false,
    onDrop: async acceptedFiles => {
      if (acceptedFiles.length === 0) {
        toast.error('No files were selected', {
          description: 'Please select a valid CSV file.'
        })

        return
      }

      form.setValue(ProjectSchemaKeys.FILE, acceptedFiles[0])
      await form.trigger(ProjectSchemaKeys.FILE)
    },
    onDropRejected: fileRejections => {
      toast.error('Failed to upload files', {
        description:
          fileRejections[0]?.errors[0].message ?? 'Something went wrong'
      })
    }
  })

  const file = useWatch({
    control: form.control,
    name: ProjectSchemaKeys.FILE
  })

  const onSubmit: SubmitHandler<ProjectSchemaType> = useCallback(() => {
    router.push(ABSOLUTE_ROUTES.PROJECTS)
  }, [router])

  useEffect(() => {
    if (file != null) {
      dropzone.inputRef.current.value = ''
    }
  }, [file, dropzone])

  return {
    dropzone,
    form,
    onSubmit
  }
}
