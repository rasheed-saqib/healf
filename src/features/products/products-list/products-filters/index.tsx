'use client'

import { type FC, useMemo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

import { getProductFilters } from '../products-list.utils'

export const ProductsFilters: FC = () => {
  const filters = useMemo(getProductFilters, [])

  return (
    <form className="mt-4">
      <Accordion type="single" collapsible>
        {filters.map(section => (
          <AccordionItem key={section.id} value={`filter-${section.id}`}>
            <AccordionTrigger className="cursor-pointer">
              <span className="font-medium text-gray-900">{section.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex gap-3">
                    <Checkbox
                      defaultValue={option.value}
                      id={`filter-mobile-${section.id}-${optionIdx}`}
                      name={section.id}
                    />
                    <Label htmlFor={`filter-mobile-${section.id}-${optionIdx}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </form>
  )
}
