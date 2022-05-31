import { Request, Response } from "express";
import { AuthenticateClientUserCase } from "./AuthenticateClientUserCase";

export class AuthenticateClientController {
  async handler(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateClientUseCase = new AuthenticateClientUserCase()
    const result = await authenticateClientUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}