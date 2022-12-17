import prismaClient from "../../prisma";

class ListHouseService{
    async execute(){
        const house = prismaClient.house.findMany()

        return house
    }
}

export { ListHouseService }