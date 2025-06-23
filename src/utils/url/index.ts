export const isValidUrl = (input: string): boolean => {
  try {
    const url = new URL(input)

    return url.hostname !== ''
  } catch {
    return false
  }
}
