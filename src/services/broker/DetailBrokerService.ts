import prismaClient from "../../prisma";

interface IRequestBroker{
    id: string;
}

class DetailBrokerService{
    async execute({id}:IRequestBroker){
        const broker = await prismaClient.broker.findFirst({
            where:{
                id:id
            }
        })

        return broker
    }
}

export { DetailBrokerService }