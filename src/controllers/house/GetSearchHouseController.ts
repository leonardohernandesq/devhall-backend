import { Request, Response } from "express";
import { GetSearchHouseService } from "../../services/house/GetSearchHouseService";

class GetSearchHouseController{
    async handle(req:Request, res:Response){
        const title = req.query.title as string;

        const getSearchHouseService = new GetSearchHouseService();

        const house = await getSearchHouseService.execute({
            title,
        })

        return res.json(house)
    }
}

export { GetSearchHouseController }