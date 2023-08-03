import { compare, hash } from "bcryptjs";


async function hashPassword(password){
    const hashedPassword=await hash(password,12)
    return hashedPassword
}

async function verufiPassword(password,hashedPassword){
    const isValid=await compare(password,hashedPassword)
    return isValid
}

export {hashPassword,verufiPassword}