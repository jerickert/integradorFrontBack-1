const { DataTypes, Model } = require("sequelize")
const db = require("../index")

class Todo extends Model{}

Todo.init({
    task: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCompleted: {
       type: DataTypes.BOOLEAN,
       defaultValue: false,
    }

}, 
{sequelize:db, modelName:"Todo"}
)



module.exports= Todo;


