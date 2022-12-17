import { Request, Response } from "express";
import { UpdateBrokerService } from "../../services/broker/UpdateBrokerService";

class UpdateBrokerController{
  async handle(req: Request, res: Response){

    const { id, name, email, whatsapp, status, phone } = req.body
      
    const updateBrokerService = new UpdateBrokerService();

    const broker = await updateBrokerService.execute({
      id,
      name,
      email,
      whatsapp, 
      status,
      phone
    })

    return res.json(broker)

  }
}

export { UpdateBrokerController }