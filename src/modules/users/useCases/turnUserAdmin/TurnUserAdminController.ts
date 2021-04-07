import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      
      const alterUserAdm = this.turnUserAdminUseCase.execute({user_id});
  
      return response.json(alterUserAdm);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { TurnUserAdminController };
