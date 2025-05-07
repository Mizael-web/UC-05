const sequelize = require('../../../config/configDb');
const { DataTypes } = require('sequelize');

const CursoModel = sequelize.define('CursoModel',{
      cod_curso: {
        type: DataTypes.INTER(4),
        primaryKey: true,
        unique: true,
        allowNull: false,
        validate 
        : {
           isNumeric :{
            msg: " É perimitido apenas numeros"
           }

        }

          
              },
              
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            isAlpha:{
                msg:'É permitido apenas letras!'
            }
        }
      },
      
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            isAlpha:{
                msg:'É permitido apenas letras!'
            }
        }
    }
      },


    {
        tableName:'curso',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }

  );

  module.exports = CursoModel