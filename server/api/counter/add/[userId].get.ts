import { createUserCount, findUserCount, updateUserCount } from '~~/server/db'

export default defineEventHandler(async (event) => {
  const params = event.context.params
  
  const userCount = findUserCount(params!.userId)
  
  if (!userCount) {
    const count: number = 0

    return createUserCount({
      userId: params!.userId,
      count: count + 1
    })
  }

  return updateUserCount({
    userId: userCount.userId,
    count: userCount.count + 1
  })
})