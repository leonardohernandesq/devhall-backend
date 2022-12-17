import prismaClient from "../../prisma";

interface IHouseRequest{
    title: string;
    price: string;
    area: string;
    bedroom: string;
    type: string;
    status: string;
    thumbnail: string;
    description: string;
    address: string;
    broker_id: string;
}

class CreateHouseService{
    async execute({
        title,
        price,
        area,
        bedroom,
        type,
        status,
        thumbnail,
        description,
        address,
        broker_id,
    }: IHouseRequest){

        const hasHouse = await prismaClient.house.findFirst({
            where:{
                title: title,
                address: address,
            }
        })

        if(hasHouse){
            throw new Error('House already exists')
        }

        if( title === '' || price == null || area === '' || bedroom === '' || type === '' || status === '' || thumbnail === '' || description === '' || broker_id === '' ){
            throw new Error('Invalid fields')
        }
        
        const house = await prismaClient.house.create({
            data:{
                title: title,
                price: Number(price),
                area: area,
                bedroom: bedroom,
                type: type,
                status: status,
                thumbnail: thumbnail,
                description: description,
                address: address,
                broker_id: broker_id
            }
        })

        return house
    }
}

export { CreateHouseService }