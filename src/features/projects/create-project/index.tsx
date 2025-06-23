'use client'

import type { FC } from 'react'

import { Form } from '@/components/ui/form'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { FileTab } from '@/features/projects/create-project/file-tab'
import { KeysTab } from '@/features/projects/create-project/keys-tab'

import { CreateProjectTab } from './create-project.constants'
import { useCreateProject } from './use-create-project'

export const CreateProject: FC = () => {
  const { form, onSubmit, tab, setTab } = useCreateProject()

  return (
    <Form {...form}>
      <form
        className="mx-auto max-w-4xl px-6 py-[60px] sm:px-12 md:px-24 lg:px-[120px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Tabs
          value={tab}
          onValueChange={value => {
            setTab(value as CreateProjectTab)
          }}
        >
          <TabsContent value={CreateProjectTab.FILE_TAB}>
            <FileTab form={form} setTab={setTab} />
          </TabsContent>
          <TabsContent value={CreateProjectTab.KEYS_TAB}>
            <KeysTab form={form} setTab={setTab} />
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  )
}
