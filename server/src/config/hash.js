import bcrypt from 'bcrypt'

const saltRounds = process.env.SALT_ROUNDS
 
export const GetHash = (string) => {
    const hash =  bcrypt.hash(string, saltRounds)
    return hash
}

export const MatchHash = (string, hash) => {
    const match = bcrypt.compare(string, hash)
    return match
}
