import { Request, Response } from "express";
import { GetSearchBrokerService } from "../../services/broker/GetSearchBrokerService";

class GetSearchBrokerController{
    async handle(req:Request, res:Response){
        const name = req.query.name as string;

        const getSearchBrokerService = new GetSearchBrokerService();

        const broker = await getSearchBrokerService.execute({
            name,
        })

        return res.json(broker)
    }
}

export { GetSearchBrokerController }