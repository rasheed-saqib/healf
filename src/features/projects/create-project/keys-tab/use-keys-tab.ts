import { useEffect, useState } from 'react'
import { type UseFormReturn, useWatch } from 'react-hook-form'
import { toast } from 'sonner'

import { ProjectSchemaKeys, type ProjectSchemaType } from '@/schemas/project'
import { getCSVHeaders } from '@/utils/csv'

interface UseKeysTabParams {
  form: UseFormReturn<ProjectSchemaType>
}

interface UseKeysTabReturn {
  fileKeys: string[]
}

export const useKeysTab = ({ form }: UseKeysTabParams): UseKeysTabReturn => {
  const file = useWatch({
    control: form.control,
    name: ProjectSchemaKeys.FILE
  })

  const [fileKeys, setFileKeys] = useState<string[]>([])

  useEffect(() => {
    if (file == null) {
      setFileKeys([])
      return
    }

    getCSVHeaders(file)
      .then(data => {
        setFileKeys(data)
      })
      .catch((error: unknown) => {
        toast.error(
          error instanceof Error ? error.message : 'Error parsing CSV file'
        )
      })
  }, [file])

  return {
    fileKeys
  }
}
