import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {user,password,host} = config
export const sequelize = new Sequelize('alkemy',user,password,{
	host,
	dialect:'mysql',
	logging:false,
})


sequelize.sync({force:false}).then(() => {
	console.log('Databases running')
})