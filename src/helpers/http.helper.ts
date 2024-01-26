import { ServerError } from '../errors'
import type { HttpResponse } from '../interfaces/http-response'

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
