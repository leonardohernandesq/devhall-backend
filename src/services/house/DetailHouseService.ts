import prismaClient from "../../prisma";

interface IRequestHouse{
    id:string;
}

class DetailHouseService{
    async execute({id}: IRequestHouse){
        const house = await prismaClient.house.findFirst({
            where:{
                id:id
            },
            include:{
                broker:{
                    
                }
            }
        })

        return (house);
    }
}

export { DetailHouseService } 