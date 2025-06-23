export type Product = {
  id: string
  title: string
  description: string
  vendor: string
  image: string
  images: string[]
  type: string
  price_range: {
    min_variant_price?: {
      amount: number
      currency_code: string
    }
    max_variant_price?: {
      amount: number
      currency_code: string
    }
  }
  status: string
  url: string
  inventory: number
  variants: number
  created_at: string
}
