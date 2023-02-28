import { randomUUID } from 'crypto'
import { StatusCodes } from 'http-status-codes'
import { createUserToken, findUserByEmail } from '~~/server/db'
import { transformUser } from '~~/server/utils/transform/user'
import { AuthUser } from '~~/types/auth-user'
import { Token } from '~~/types/token'
import { User } from '~~/types/user'

export default defineEventHandler(async (event) => {
  const {
    email, 
    password
  } = await readBody(event)

  const user: User | undefined = findUserByEmail(email)

  if (!user) {
    return sendError(event, createError({
      statusCode: StatusCodes.NOT_FOUND,
      statusMessage: 'User not found'
    }))
  }

  if (password !== user.password) {
    return sendError(event, createError({
      statusCode: StatusCodes.FORBIDDEN,
      statusMessage: 'Email or password not valid'
    }))
  }
  
  const authUser: AuthUser = transformUser(user)
  
  const token: Token = createUserToken(authUser.id)
  setCookie(event, 'token', token.value)
  
  return authUser
})