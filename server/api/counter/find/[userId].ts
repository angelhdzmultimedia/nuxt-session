import { findUserCount } from '~~/server/db'

export default defineEventHandler(async (event) => {
  const params = event.context.params

  return findUserCount(params!.userId)
})