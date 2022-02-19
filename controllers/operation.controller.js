import Operation from '../schema/Operation.js'
import { resError } from '../utils/resError.js'
import { v4 } from 'uuid'
export const createOperation = async (req, res) => {
	const { concept, amount, type,date } = req.body
	if (!concept || !amount || !type || !date)
		return resError(
			402,
			'The operation requires the concept, date, amount and type'
		)

	try {
		const operation = await Operation.create({
			id: v4(),
			idUser: req.userId,
			concept,
			amount,
			date,
			incomOrExit: type,
		})
		res.send(operation.dataValues)
	} catch (e) {
		console.log(e)
		res.status(404).send('there was an error')
	}
}

export const updateOperation = async (req, res) => {
	const { concept, amount, date } = req.body
	if (!concept && !amount && !date)
		return resError(
			402,
			'The operation requires the concept or/and amount to be provided'
		)
	const { id } = req.params
	const operation = await Operation.findAll({ id })
	if (!operation.length)
		return resError(404, 'The operation does not exist', res)
	const { dataValues } = operation[0]
	await Operation.update(
		{
			concept: concept || dataValues.concept,
			amount: amount || dataValues.amount,
			date: date || dataValues.date
		},
		{
			where: {
				id,
			},
		}
	)
	const edit = await Operation.findOne({id})
    res.json({...edit.dataValues})
}

export const deleteOperation = async (req, res) => {
	await Operation.destroy({
		where: {
			id: req.params.id,
		},
	})
	res.send('Operation delete')
}
