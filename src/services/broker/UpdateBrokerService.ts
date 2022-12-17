import prismaClient from "../../prisma";

interface IRequestBroker{
    id:string;
    name: string;
    email: string;
    whatsapp: string;
    status: boolean;
    phone: string | null;
}

class UpdateBrokerService{
    async execute({id, name, email, whatsapp, status, phone}: IRequestBroker){

        const broker = await prismaClient.broker.update({
            where:{
                id: id,
            },
            data:{
                name: name,
                email: email,
                whatsapp: whatsapp,
                status: status === true ? true : false,
                phone:phone
            }
        })

        return(broker)

    }
}

export {UpdateBrokerService}