import { DataTypes } from "sequelize"
import {sequelize} from '../db/connect.js'

const Operation = sequelize.define('Operations',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        unsigned:true,
    },
    idUser:{
        type:DataTypes.UUID,
        references:{
            model:'users',
            key:'id'
        }
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    concept:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    incomOrExit:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

export default Operation