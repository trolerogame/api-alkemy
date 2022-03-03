import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {user,password,host,db} = config
export const sequelize = new Sequelize(db,user,password,{
	host,
	dialect:'mysql',
	logging:false,
})


sequelize.sync({force:false}).then(() => {
	console.log('Databases running')
})