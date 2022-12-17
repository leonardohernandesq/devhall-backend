import { Request, Response } from "express";
import { ListBrokerService } from "../../services/broker/ListBrokerService";

class ListBrokerController{
    async handle(req:Request, res:Response){
        const listBrokerService = new ListBrokerService();
        const status = req.query.status as string | undefined;

        const broker = await listBrokerService.execute({
            status: status
        });

        return res.json(broker)

    }
}

export {ListBrokerController};