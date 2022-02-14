import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {user,password,host} = config
export const sequelize = new Sequelize(`mysql://${user}:${password}@${host}:3306/alkemy`)


sequelize.sync({force:false}).then(() => {
	console.log('Databases running')
})