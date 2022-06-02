import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handler(request: Request, response: Response) {

    const findAllAvailableUseCase = new FindAllAvailableUseCase()
    const deliveries = await findAllAvailableUseCase.execute()

    return response.json(deliveries)
  }
}
