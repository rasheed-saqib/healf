'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import {
  type SubmitHandler,
  useForm,
  type UseFormReturn
} from 'react-hook-form'
import { toast } from 'sonner'

import { ABSOLUTE_ROUTES } from '@/constants/routes'
import {
  ProjectSchema,
  ProjectSchemaKeys,
  type ProjectSchemaType
} from '@/schemas/project'
import { uploadProducts } from '@/services/products'

import { CreateProjectTab } from './create-project.constants'

interface UseCreateProjectReturn {
  form: UseFormReturn<ProjectSchemaType>
  onSubmit: SubmitHandler<ProjectSchemaType>
  tab: CreateProjectTab
  setTab: (tab: CreateProjectTab) => void
}

export const useCreateProject = (): UseCreateProjectReturn => {
  const router = useRouter()

  const [tab, setTab] = useState<CreateProjectTab>(CreateProjectTab.FILE_TAB)

  const form = useForm<ProjectSchemaType>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      [ProjectSchemaKeys.KEYS]: {}
    }
  })

  const onSubmit: SubmitHandler<ProjectSchemaType> = useCallback(
    async data => {
      try {
        await uploadProducts(
          data[ProjectSchemaKeys.FILE],
          data[ProjectSchemaKeys.KEYS]
        )

        toast.success('Project created successfully!', {
          description:
            'Your project has been created. You can start exploring products catalog now.'
        })

        router.push(ABSOLUTE_ROUTES.PRODUCTS)
      } catch (error) {
        toast.error('Failed to create project', {
          description:
            error instanceof Error ? error.message : 'Please try again later.'
        })
      }
    },
    [router]
  )

  return {
    form,
    onSubmit,
    tab,
    setTab
  }
}
