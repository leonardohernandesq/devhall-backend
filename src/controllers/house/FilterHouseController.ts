import { Request, Response } from 'express'
import { FilterHouseService } from '../../services/house/FilterHouseService'

class FilterHouseController{
    async handle(req: Request, res: Response){

        const filterHouseService = new FilterHouseService();
        const bedroom = req.query.bedroom as string;
        const type = req.query.type as string;
        const status = req.query.status as string;
        const area = req.query.area as string;
        const price = req.query.price as any;
        const limite = req.query.limite as any;

        const house = await filterHouseService.execute({
            bedroom: bedroom,
            type: type,
            status: status,
            area: area,
            price: price,
            limite: limite
        })

        return res.json(house)
    }
}

export { FilterHouseController }