export const resError = (st, error, res) => res.status(st).send({ error })
