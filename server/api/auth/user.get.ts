import { StatusCodes } from 'http-status-codes'
import { findUserById, findUserToken } from '~~/server/db'
import { AuthUser } from '~~/types/auth-user'
import { Token } from '~~/types/token'

export default defineEventHandler(async (event) => {
  const cookieToken: string = getCookie(event, 'token')!
  const token: Token | undefined = findUserToken(cookieToken)

  if (!token) {
    return sendError(event, createError({
      statusCode: StatusCodes.FORBIDDEN,
      statusMessage: 'Session not valid'
    }))
  }
  
  const authUser: AuthUser | undefined = findUserById(token.userId)

  if (!authUser) {
    return sendError(event, createError({
      statusCode: StatusCodes.NOT_FOUND,
      statusMessage: 'User not found'
    }))
  }

  return authUser
})