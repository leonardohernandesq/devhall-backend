import { Request, Response } from "express";
import { UpdateHouseService } from "../../services/house/UpdateHouseService";

class UpdateHouseController{
    async handle(req: Request, res: Response){
        const updateHouseService = new UpdateHouseService();
        const {
            id,
            title,
            price,
            area,
            bedroom,
            type,
            status,
            description,
            address,
            broker_id
        } = req.body

        
        if(!req.file){
            throw new Error("Erro ao enviar a imagem")
        } else {
            const { originalname, filename: thumbnail } = req.file;

            const house = await updateHouseService.execute({
                id,
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

export { UpdateHouseController }