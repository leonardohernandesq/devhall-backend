import prismaClient from "../../prisma";

interface IPropsUser{
    id: string
}

class DetailUserService{
    async execute({id}: IPropsUser){
        const user = prismaClient.user.findFirst({
            where:{
                id:id
            }
        })

        return user
    }
}

export {DetailUserService}