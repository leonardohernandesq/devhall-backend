import { Request, Response } from "express";
import { DeleteHouseService } from "../../services/house/DeleteHouseService";

class DeleteHouseController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string

        const deleteHouseService = new DeleteHouseService();

        const house = await deleteHouseService.execute({
            id: id
        })

        return res.json(house)
    }
}

export { DeleteHouseController }