import prismaClient from "../../prisma";

interface IRequestHouse{
    title: string,
}

class GetSearchHouseService{
    async execute({title}: IRequestHouse){
        const house = await prismaClient.house.findMany({
            where:{
                title:{
                    contains:title,
                    mode: 'insensitive',
                }
            }
        })

        return house
    }
}

export { GetSearchHouseService }