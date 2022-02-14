import Operation from '../schema/Operation.js'
import {resError} from '../utils/resError.js'
import {v4} from 'uuid'
export const createOperation = async (req, res) => {
    const {concept, amount, type} = req.body
    if(!concept || !amount || !type)
        return resError(402, 'The operation requires the concept, amount and type')
    try{
        const operation = await Operation.create({
            id:v4(),
            idUser:req.userId,
            concept, 
            amount, 
            incomOrExit:type
        })
        res.send(operation.dataValues)
    }catch(e){
        console.log(e)
        res.status(404).send('there was an error')
    }
    
}

export const updateOperation = (req, res) => {
    
}

export const deleteOperation = async (req, res) => {
    await Operation.destroy({
        where: {
            id:req.params.id
        }
    })
    res.send('Operation delete')
}