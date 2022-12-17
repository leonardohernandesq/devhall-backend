import { Request, Response } from "express";
import { DeleteBrokerService } from "../../services/broker/DeleteBrokerService";

class DeleteBrokerController{
    async handle(req:Request, res: Response){
        const id = req.query.id as string

        const deleteBrokerService = new DeleteBrokerService();

        const broker = await deleteBrokerService.execute({
            id: id
        })

        return res.json(broker)
    }
}

export { DeleteBrokerController }