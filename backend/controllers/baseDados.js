const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Criar uma conta
app.post('/contas', async (req, res) => {
  const { nome, saldo } = req.body;
  const novaConta = await prisma.conta.create({
    data: {
      nome,
      saldo
    }
  });
  res.json(novaConta);
});

// Listar todas as contas
app.get('/contas', async (req, res) => {
  const contas = await prisma.conta.findMany();
  res.json(contas);
});

// Mostrar uma conta pelo ID
app.get('/contas/:id', async (req, res) => {
  const { id } = req.params;
  const conta = await prisma.conta.findUnique({
    where: { id: Number(id) }
  });
  if (conta) {
    res.json(conta);
  } else {
    res.status(404).json({ error: 'Conta não encontrada' });
  }
});

// Alterar uma conta
app.put('/contas/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, saldo } = req.body;
  const contaAtualizada = await prisma.conta.update({
    where: { id: Number(id) },
    data: { nome, saldo }
  });
  res.json(contaAtualizada);
});

// Excluir uma conta
app.delete('/contas/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.conta.delete({
    where: { id: Number(id) }
  });
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});