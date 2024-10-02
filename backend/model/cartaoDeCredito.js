const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CartaoDeCredito = sequelize.define('CartaoDeCredito', {
    numero: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true
    },
    nomeTitular: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    dataValidade: {
        type: DataTypes.DATE,
        allowNull: false
    },
    codigoSeguranca: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    limiteCredito: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    saldoDisponivel: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});


module.exports = prisma.cartaoDeCredito;
