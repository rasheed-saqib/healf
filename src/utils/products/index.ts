import { PRODUCT_FORMATTERS } from '@/constants/product'

/**
 * Formats an array of products based on a mapping of destination keys to source keys.
 * @param products
 * @param map
 * @return An array of formatted products.
 */
export const formatProducts = (
  products: Array<Record<string, string>>,
  map: Record<string, string> = {}
): Array<Record<string, string>> => {
  const pairs = Object.entries(map)

  return products.map(product => {
    const result = {} as Record<string, string>

    for (const [destKey, srcKey] of pairs) {
      if (srcKey in product) {
        try {
          const formatter = PRODUCT_FORMATTERS[destKey]

          result[destKey] = formatter(product[srcKey]) as string
        } catch {
          result[destKey] = product[srcKey]
        }
      }
    }

    return result
  })
}
