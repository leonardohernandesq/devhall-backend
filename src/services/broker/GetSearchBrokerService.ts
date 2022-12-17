import prismaClient from "../../prisma";

interface IRequestBroker{
    name: string,
}

class GetSearchBrokerService{
    async execute({name}: IRequestBroker){
        const broker = await prismaClient.broker.findMany({
            where:{
                name:{
                    contains:name,
                    mode: 'insensitive',
                }
            }
        })

        return broker
    }
}

export { GetSearchBrokerService }