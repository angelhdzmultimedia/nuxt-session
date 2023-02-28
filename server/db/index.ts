import { User } from '~~/types/user'
import {randomUUID} from 'node:crypto'
import { Token } from '~~/types/token'
import { UserCount } from '~~/types/user-count'
import { AuthUser } from '~~/types/auth-user'

export const users: User[] = []
export const tokens: Token[] = []
export const usersCount: UserCount[] = []

export function createUserCount(userCount: UserCount): UserCount {
  usersCount.push(userCount)
  return userCount
}

export function updateUserCount(newUserCount: UserCount): UserCount {
  const userCount: UserCount | undefined = findUserCount(newUserCount.userId)
  const userCountIndex: number = usersCount.indexOf(userCount!)
  usersCount[userCountIndex] = newUserCount
  return newUserCount
}

export function findUserCount(userId: string): UserCount | undefined {
  return usersCount.find(item => item.userId === userId)
}

export function createUserToken(userId: string): Token {
  const token: Token = {
    userId,
    value: randomUUID()
  }

  tokens.push(token)

  return token
}

export function findUserToken(token: string): Token | undefined {
  return tokens.find(item => item.value === token)
}

export function createUser(user: Partial<User>): User {
  const newUser: User = {
    ...user as User,
    id: randomUUID()
  }

  users.push(newUser)

  return newUser
}

export function findUserById(id: string): User | undefined {
  return users.find(item => item.id === id)
}

export function findUserByEmail(email: string): User | undefined {
  return users.find(item => item.email === email)
}