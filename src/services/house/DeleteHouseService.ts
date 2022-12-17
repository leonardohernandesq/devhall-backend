import prismaClient from "../../prisma";

interface IRequestHouse{
    id:string;
}

class DeleteHouseService{
    async execute({id}: IRequestHouse){
        const house = await prismaClient.house.delete({
            where:{
                id:id
            }
        })

        return (house);
    }
}

export { DeleteHouseService } 