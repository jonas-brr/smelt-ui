import type { Request } from './requests'

interface PaginatedResponse<T> {
  count: number
  next?: string
  previous?: string
  results: T[]
}

interface PaginationOptions {
  page?: number
  // to be extended, e.g.:
  // sort?: string
  // etc ...
}

export type { PaginatedResponse, PaginationOptions, Request }
