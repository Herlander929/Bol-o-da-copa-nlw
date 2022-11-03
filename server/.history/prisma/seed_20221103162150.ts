

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


async function main() {
const user = await prisma.user.create({
    data: {
        name : 'Herl San',
        email: 'herl.san@gmail.com',
        avatarURL: 'https://github.com/Herlander929.png'
       

    }
})
    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'BOL123',
            userId: user.id
           

        }
    })
}
main()