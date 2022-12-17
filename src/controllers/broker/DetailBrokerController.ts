import { Response, Request } from "express";
import { DetailBrokerService } from "../../services/broker/DetailBrokerService";

class DetailBrokerController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;

        const detailBrokerService = new DetailBrokerService();

        const broker = await detailBrokerService.execute({
            id:id
        })

        return res.json(broker)
    }
}

export { DetailBrokerController }