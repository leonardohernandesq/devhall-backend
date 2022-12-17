import { Request, Response } from "express";
import { DetailHouseService } from "../../services/house/DetailHouseService";

class DetailHouseController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string

        const detailHouseService = new DetailHouseService();

        const house = await detailHouseService.execute({
            id: id
        })

        return res.json(house)
    }
}

export { DetailHouseController }