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
          result[destKey] = JSON.parse(product[srcKey])
        } catch {
          result[destKey] = product[srcKey]
        }
      }
    }

    return result
  })
}
