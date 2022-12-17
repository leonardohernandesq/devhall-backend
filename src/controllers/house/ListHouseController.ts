import { Request, Response } from 'express';
import { ListHouseService } from '../../services/house/ListHouseService';

class ListHouseController{
    async handle(req: Request, res: Response){
        const listHouseService = new ListHouseService();

        const broker = await listHouseService.execute();

        return res.json(broker)
    }
}

export { ListHouseController }