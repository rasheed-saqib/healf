export type APIResponse<T = Record<string, unknown>> = {
  status: 'success' | 'error'
  message: string
  data?: T
}

export type PropsWithParams<P = Record<string, string>, Q = unknown> = Q & {
  params: Promise<P>
}
