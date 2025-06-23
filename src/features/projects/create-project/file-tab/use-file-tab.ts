import { useEffect } from 'react'
import { type DropzoneState, useDropzone } from 'react-dropzone'
import { type UseFormReturn, useWatch } from 'react-hook-form'
import { toast } from 'sonner'

import { ProjectSchemaKeys, type ProjectSchemaType } from '@/schemas/project'

interface UseFileTabParams {
  form: UseFormReturn<ProjectSchemaType>
}

interface UseFileTabReturn {
  dropzone: DropzoneState
  file: File | null
}

export const useFileTab = ({ form }: UseFileTabParams): UseFileTabReturn => {
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

  useEffect(() => {
    if (file != null) {
      dropzone.inputRef.current.value = ''
    }
  }, [file, dropzone])

  return {
    dropzone,
    file
  }
}
