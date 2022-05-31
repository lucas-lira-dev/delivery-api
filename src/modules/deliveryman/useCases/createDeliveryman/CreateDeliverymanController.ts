import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
  async handler(request: Request, response: Response) {
    const { username, password } = request.body

    const createDeliverymanUseCase = new CreateDeliverymanUseCase()
    const result = await createDeliverymanUseCase.execute({
      username,
      password
    })

    return response.json(result)
  }
}