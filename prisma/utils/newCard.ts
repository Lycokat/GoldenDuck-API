import { faker } from '@faker-js/faker'
import { prisma } from '../../src/libs/prisma'

export const newCard = async (
  idAccount: number,
  amount: number
): Promise<number[]> => {
  const listID = [] as number[]
  for (let i = 0; i < amount; i++) {
    const randomDate = faker.date.past()

    const { id } = await prisma.card.create({
      data: {
        idAccount,
        number: faker.number.bigInt({
          min: 1000000000000000n,
          max: 9999999999999999n
        }),
        cvv: faker.number.int({
          min: 100,
          max: 999
        }),
        expiration: faker.date.future(),
        createdAt: randomDate,
        updatedAt: randomDate
      },
      select: {
        id: true
      }
    })

    listID.push(id)
  }

  return listID
}
