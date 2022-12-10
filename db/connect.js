import {Sequelize} from 'sequelize'
import {config} from '../config/index.js'
const {user,password,host,db,portdb,database_url} = config
// export const sequelize = new Sequelize(db,user,password,{
// 	host,
// 	dialect:'mysql',
// 	logging:false,
// 	port:portdb,
// })

export const sequelize = new Sequelize(database_url,{
	dialectOptions:{
		ssl: {
			rejectUnauthorized: true,        
		}
	}
})


sequelize.sync({force:false}).then(() => {
	console.log('Databases running')
}).catch(err => console.log(err))
