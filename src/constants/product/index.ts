export const PRODUCT_KEYS = [
  'id',
  'title',
  'description',
  'vendor',
  'image',
  'images',
  'type',
  'price_range',
  'status',
  'variants',
  'url',
  'inventory',
  'created_at'
] as const

export const PRODUCT_FORMATTERS: Record<string, (value: string) => unknown> = {
  id: (value: string) => value,
  title: (value: string) => value,
  description: (value: string) => value,
  vendor: (value: string) => value,
  image: (value: string) => value,
  images: (value: string) => JSON.parse(value),
  type: (value: string) => value,
  price_range: (value: string) => JSON.parse(value),
  status: (value: string) => value,
  url: (value: string) => value,
  inventory: (value: string) => Number.parseInt(value),
  variants: (value: string) => Number.parseInt(value),
  created_at: (value: string) => new Date(value)
}
