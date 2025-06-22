import prettyBytes from 'pretty-bytes'
import { type FC, useCallback } from 'react'
import { type UseFormReturn, useWatch } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { TrashIcon } from '@/icons/trash'
import { ProjectSchemaKeys, type ProjectSchemaType } from '@/schemas/project'

interface FilePreviewProps {
  form: UseFormReturn<ProjectSchemaType>
}

export const FilePreview: FC<FilePreviewProps> = ({ form }) => {
  const file = useWatch({
    control: form.control,
    name: ProjectSchemaKeys.FILE
  })

  const handleRemoveFile = useCallback(() => {
    form.resetField(ProjectSchemaKeys.FILE)
  }, [form])

  if (file == null) {
    return null
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-neutral-200 px-4 py-3">
      <div className="w-full">
        <p className="line-clamp-1 font-medium">{file.name}</p>
        <p className="text-xs text-neutral-400">{prettyBytes(file.size)}</p>
      </div>

      <Button
        className="p-2"
        size="icon"
        variant="ghost"
        onClick={handleRemoveFile}
      >
        <TrashIcon className="size-4 text-neutral-950/70" />
      </Button>
    </div>
  )
}
