import e from "express";
import prismaClient from "../../prisma";

interface IBrokerRequest{
    name: string;
    email: string;
    whatsapp: string;
    status: boolean;
    phone: string | null;
}

class CreateBrokerService{
    async execute({name, email, whatsapp, status, phone}: IBrokerRequest){
        if(!name || !email || !whatsapp ){
            throw new Error("Invalid Info Error")
        }

        const hasBroker = await prismaClient.broker.findFirst({
            where:{
                email: email,
            }
        })

        if(hasBroker){
            throw new Error("Broker Already Exists")
        }
        
        const broker = await prismaClient.broker.create({
            data:{
                name: name,
                email: email,
                whatsapp: whatsapp,
                status: status,
                phone: phone,
            }
        })

        return broker
    }
}

export { CreateBrokerService }