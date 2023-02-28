import { AuthUser } from '~~/types/auth-user'
import { User } from '~~/types/user'

export function transformUser({email, name, id, username}: User): AuthUser {
  return {email, name, id, username}
}