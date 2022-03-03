import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {user,password,host,db,portdb} = config
export const sequelize = new Sequelize(db,user,password,{
	host,
	dialect:'mysql',
	logging:false,
	port:portdb,
})


sequelize.authenticate().then(() => {
	console.log('Databases running')
}).catch(err => console.log(err))
