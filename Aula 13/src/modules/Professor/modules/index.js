const {data, DataTypes} = require ('sequelize')
const sequelize = require ('../../../config/configDb')



const Professor = sequelize.define ('Professor', {
matricula: {
type: DataTypes.CHAR (8),
primaryKe: true,
validate: {
    is:{
        args: /^(?=[A-Za-z])(?=(?:.*[A-Za-z]){2,})(?=(?:.*\d){7})[A-Za-z\d]+$/, // criado regex em chatgpt
        msg: 'A matriucla dever começar com uma letra e ter mais 7 numeros'

    }
}
},
nome: {
    type: DataTypes.STRING (100),
allowNull: false,
validate: {
    len:{
        args:[100]
    }
}
},
email: {
    type: DataTypes.STRING (100),
    allowNull: false,
    unique: true,
    validate: {
    isEmail:{
        msg: 'Forneça um e-mail válido!'
    } 

    }
},
    senha: {
   type:  DataTypes.CHAR(10),
   allowNull: false,
   validate: {
    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10}$/,
    msg: 'A matricula deve começar com uma letra maiuscula, ter um catacter especial,  mais de 7 caracteres'
   }   
    }

})
module.exports = Professor