import { Request, Response } from "express";
import { AuthenticateDeliverymanUserCase } from "./AuthenticateDeliverymanUserCase";

export class AuthenticateDeliverymanController {
  async handler(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUserCase()
    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}