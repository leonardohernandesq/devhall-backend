import prismaClient from "../../prisma";

interface IRequestListBroker{
    status:string | undefined
}

class ListBrokerService{
    async execute({status}: IRequestListBroker){
        const broker = await prismaClient.broker.findMany({
            where:{
                status:status == 'true' ? true : status == 'false' ? false : undefined 
            }
        })

        return broker
    }
}

export { ListBrokerService }