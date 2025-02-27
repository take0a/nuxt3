import type { Customer } from '~/shared/types/customer'

export default defineEventHandler(
  async (event): Promise<Customer> => {
    try {
      const body = await readBody(event)
      // return await $fetch<Customer>(`https://xxxxx/customer/`, {
      //   method: 'POST',
      //   body: body,
      // })
      return body
    }
    catch (e) {
      throw createError(e as Error)
    }
  },
)
