import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prismaClient"

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUserCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error('Username or password invalid!')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid!')
    }

    const token = sign({ username }, '4128a17ff202ac332f6bf51eabf13eb8', {
      subject: client.id,
      expiresIn: '1d'
    })

    return token
  }
}
