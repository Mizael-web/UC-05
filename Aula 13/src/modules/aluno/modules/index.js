const { DataTypes } = require('sequelize');
const sequelize = require ("../../../config/configDb");

const Aluno = sequelize.define(
  'Aluno',
  {
    // Model attributes are defined here
    matricula: {

      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey:true
    },


    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }, 

     email: {
        type:DataTypes.STRING (60),
        allowNull:false,
        unique: true,
        validate: {
            ismail:{
                msg:' Forneça um e-mail valido!'
            },
            len:{
                 args: [10, 60],
                 msg: 'O e-mail deve ter no minimo 10 caracteres e no maximo 60!'

            }
        }
     },

     senha: {
       type: DataTypes.STRING(10),
       allowNull:false,
       validate:{
        len: {
            args:[10],
            msg: 'A senha deve ter 10 cacteres!'
        },
        is: { // criar no regex         

        
        }

        }
       },

       turma_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{

            model: turma
        },
       
     },
     
        tableName: 'aluno',
        createdAt:'criado em',
        updatedAt:'atualizado em'
     },    
     

);

module.export = Aluno;