import { randomUUID } from 'crypto'
import { StatusCodes } from 'http-status-codes'
import { createUser, findUserByEmail } from '~~/server/db'
import { transformUser } from '~~/server/utils/transform/user'
import { AuthUser } from '~~/types/auth-user'
import { User } from '~~/types/user'

export default defineEventHandler(async (event) => {
  const {
    email, 
    password,
    username,
    name
  } = await readBody(event)

  const user: User | undefined = findUserByEmail(email)

  if (user) {
    return sendError(event, createError({
      statusCode: StatusCodes.CONFLICT,
      statusMessage: 'User already exists'
    }))
  }

  const newUser: User = createUser({
    email, 
    password,
    username,
    name,
  })

  const authUser: AuthUser = transformUser(newUser)
  
  return authUser
})