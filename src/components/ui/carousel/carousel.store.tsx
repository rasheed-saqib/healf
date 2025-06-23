import { createContext, useContext } from 'react'

import type { CarouselContextProps } from './carousel.types'

export const CarouselContext = createContext<CarouselContextProps | null>(null)

export const useCarousel = (): CarouselContextProps => {
  const context = useContext(CarouselContext)

  if (context == null) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}
