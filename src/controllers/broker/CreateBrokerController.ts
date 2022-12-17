import { Request, Response } from "express";

import { CreateBrokerService } from "../../services/broker/CreateBrokerService";

class CreateBrokerController{
    async handle(req:Request, res:Response){

        const {name, email, whatsapp, status, phone} = req.body

        const createBrokerService = new CreateBrokerService();
        
        const broker = await createBrokerService.execute({
            name,
            email,
            whatsapp,
            status,
            phone
        })

        return res.json(broker)
    }
}

export { CreateBrokerController }