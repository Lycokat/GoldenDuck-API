import { faker } from '@faker-js/faker'
import { prisma } from '../../src/libs/prisma'

export const newAccount = async (
  idUser: number,
  amount: number
): Promise<number[]> => {
  const listID = [] as number[]
  for (let i = 0; i < amount; i++) {
    const randomDate = faker.date.past()

    const { id } = await prisma.account.create({
      data: {
        idUser,
        imgUrl: faker.image.url(),
        balance: faker.number.int({
          min: 0,
          max: 1000000
        }),
        updatedAt: randomDate,
        createdAt: randomDate
      },
      select: {
        id: true
      }
    })

    listID.push(id)
  }

  return listID
}
