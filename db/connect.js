import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {USERNAME,password,host} = config
export const sequelize = new Sequelize('alkemy',USERNAME,password,{
	host,
	dialect:'mysql',
	logging:false,
})


sequelize.sync({force:false}).then(() => {
	console.log('Databases running')
})