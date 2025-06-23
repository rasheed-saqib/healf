import type { FC } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { PRODUCT_KEYS } from '@/constants/product'
import { formatKey } from '@/features/projects/create-project/keys-tab/keys-tab.utils'
import { LoaderIcon } from '@/icons/loader'
import { ProjectSchemaKeys, type ProjectSchemaType } from '@/schemas/project'

import { CreateProjectTab } from '../create-project.constants'
import { useKeysTab } from './use-keys-tab'

interface KeysTabProps {
  form: UseFormReturn<ProjectSchemaType>
  setTab: (tab: CreateProjectTab) => void
}

export const KeysTab: FC<KeysTabProps> = ({ form, setTab }) => {
  const { fileKeys } = useKeysTab({ form })

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold text-zinc-950">
          Product Keys (2 of 2)
        </h1>
        <p className="text-sm text-neutral-600">
          Match your CSV columns to the product attributes we recognize. This
          step ensures your data is perfectly aligned for a seamless experience.
        </p>
      </div>

      <FormField
        name={ProjectSchemaKeys.KEYS}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <ScrollArea className="h-[50vh] w-full rounded-lg border border-neutral-200">
                {PRODUCT_KEYS.map(key => (
                  <div
                    key={key}
                    className="group flex w-full items-center justify-between gap-2 rounded-lg p-2 hover:bg-neutral-100"
                  >
                    <Input
                      placeholder="Drawing discipline"
                      className="w-40"
                      defaultValue={formatKey(key)}
                      readOnly
                    />

                    <Select
                      value={field.value[key] ?? ''}
                      onValueChange={value => {
                        field.onChange({
                          ...field.value,
                          [key]: value
                        })
                      }}
                    >
                      <SelectTrigger className="w-full flex-1">
                        <SelectValue placeholder="Select your key" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Product Keys</SelectLabel>
                          {fileKeys.map(fileKey => (
                            <SelectItem key={fileKey} value={fileKey}>
                              {formatKey(fileKey)}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </ScrollArea>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex w-full justify-end gap-2">
        <Button
          variant="ghost"
          onClick={() => {
            setTab(CreateProjectTab.FILE_TAB)
          }}
        >
          Back
        </Button>

        <Button
          type="submit"
          className="w-[120px]"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <LoaderIcon className="size-4" />
          ) : (
            'Start Magic ✨'
          )}
        </Button>
      </div>
    </div>
  )
}
