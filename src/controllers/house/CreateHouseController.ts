import { Request, Response } from "express";
import { CreateHouseService } from "../../services/house/CreateHouseService";

class CreateHouseController{
    async handle(req:Request, res:Response){
        const createHouseService = new CreateHouseService();

        const {
            title,
            price,
            area,
            bedroom,
            type,
            status,
            description,
            address,
            broker_id,
        } = req.body

        if(!req.file){
            throw new Error("Erro ao enviar a imagem")
        } else {
            const { originalname, filename: thumbnail } = req.file;

            const house = await createHouseService.execute({
                title,
                price,
                area,
                bedroom,
                type,
                status,
                thumbnail,
                description,
                address,
                broker_id
            })
            return res.json(house)
        }
    }
}


export { CreateHouseController }