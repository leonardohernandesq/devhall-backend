import prismaClient from "../../prisma";

interface IRequestHouse{
    bedroom:string | null,
    type: string | null,
    status: string | null,
    area: string | null,
    price: number | null,
    limite: number | null
}

class FilterHouseService{
    async execute({bedroom, type, status, area, price, limite}: IRequestHouse){
        const house = await prismaClient.house.findMany({
            where:{
                bedroom: {
                    contains: bedroom,
                    mode: 'insensitive',
                },
                type: {
                    contains: type,
                    mode: 'insensitive',  
                },
                status: {
                    contains: status,
                    mode: 'insensitive',  
                },
                area:area,
                price:{
                    lte: Number(limite) || undefined,
                    gte: Number(price) || undefined
                },
            }
        })

        return house
    }
}

export { FilterHouseService }