import { DataTypes } from "sequelize"
import {sequelize} from '../db/connect.js'

const User = sequelize.define('Users',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
})

export default User