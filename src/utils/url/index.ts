/**
 * Checks if the input string is a valid URL.
 * @param input
 * @return {boolean} True if the input is a valid URL, false otherwise.
 */
export const isValidUrl = (input: string): boolean => {
  try {
    const url = new URL(input)

    return url.hostname !== ''
  } catch {
    return false
  }
}
