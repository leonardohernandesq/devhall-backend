import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'

import prismaClient from '../../prisma'

interface IAuthUserRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({email, password}: IAuthUserRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('Email/password incorrect')
        }

        const passwordMatch = await compare(password, user?.password)

        if(!passwordMatch){
            throw new Error('Email/password incorrect')
        }

        const token = sign(
            {
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user?.id,
            email: user?.email,
            token: token,
        }
    }
}

export { AuthUserService }