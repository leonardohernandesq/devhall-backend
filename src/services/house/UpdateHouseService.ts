import prismaClient from "../../prisma";

interface IRequestHouse{
    id: string;
    title: string;
    price: number;
    area: string;
    bedroom: string;
    type: string;
    status: string;
    thumbnail: string;
    description: string;
    address: string;
    broker_id: string;
}

class UpdateHouseService{
    async execute({
        id,
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
    }: IRequestHouse){

        if( title=== '' || price === null || area === '' || bedroom === '' || type === '' || status === '' || thumbnail === '' || description === '' || broker_id === '' ){
            throw new Error('Invalid fields')
        }

        const house = prismaClient.house.update({
            where:{
                id:id
            },
            data:{
                title: title,
                price: price,
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

        return (house)
    }
}

export { UpdateHouseService }