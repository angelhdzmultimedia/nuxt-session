import { updateUserCount } from '~~/server/db'

export default defineEventHandler(async (event) => {
  const params = event.context.params

  return updateUserCount({
    userId: params!.userId,
    count: 0
  })
})