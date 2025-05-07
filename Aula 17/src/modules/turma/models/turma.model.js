const sequelize = require('../../../config/configDb');
const { DataTypes } = require('sequelize');

const TurmaModel = sequelize.define('TurmaModel',{
    cod_turma:{         
        type: DataTypes.INTEGER,
        primaryKey: true,  
        validate : {
           isNumeric :{
            msg: " O codigo da turma é  perimitido apenas numeros"
           },
           len:{
            args:[9],
            msg: ' O codigo da turma deve ter 9 numeros'
           }

        }
          
              },

   cod_curso: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
        isNumeric :{
          msg: " O codigo do curso é perimitido apenas numeros"
         },
         len:{
          args:[4],
          msg: ' O codigo da turma deve ter 4 numeros'
         },
        },
        references :{
             model : 'curso',
             key: 'cod_curso'
        }    
    
      },


      turno: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            isIn:{
              args: [['Matutino', 'vespertino', 'Noturno']],
                msg:'Turno inválido!'
            }
        }
    }
      },
    
    
    {
        tableName:'turma',
        //timestamps, caso não queira inscreve: timestamps: false, e retira o createdAt: e updatedAt:
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
  );

  module.exports = TurmaModel