import prismaClient from "../../prisma";

interface IRequestBroker{
    id:string;
}

class DeleteBrokerService{
    async execute({id}: IRequestBroker){
        const broker = await prismaClient.broker.delete({
            where:{
                id:id
            }
        })

        return(broker)
    }
}

export { DeleteBrokerService } 