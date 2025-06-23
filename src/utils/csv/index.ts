import { parse } from 'papaparse'

export const parseCSV = async (
  file: string
): Promise<Array<Record<string, string>>> => {
  return new Promise((resolve, reject) => {
    parse(file, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      complete: ({ data }) => {
        resolve(data as Array<Record<string, string>>)
      },
      error(error: Error) {
        reject(new Error(`Error parsing CSV file: ${error.message} in file`))
      }
    })
  })
}

export const getCSVHeaders = async (file: File): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    parse(file, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      preview: 1,
      complete: ({ data }) => {
        resolve(
          Object.keys(data[0] ?? {}).toSorted((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: 'base' })
          )
        )
      },
      error(error: Error) {
        reject(new Error(`Error parsing CSV file: ${error.message} in file`))
      }
    })
  })
}
