import { PrismaClient } from '@prisma/client';

// cria um objetivo financeiro
export const criarObjetivoFinanceiro = (req, res) => {}

// ler um objetivo financeiro
export const lerObjetivoFinanceiro = (req, res) => {}

// atualiza um objetivo financeiro
export const atualizarObjetivoFinanceiro = async (req, res) => {
    try {
      const { saldo, conta, senha } = req.body;//são os parâmetros para o usuário
 
      if (!conta || !senha || saldo === undefined) {//aqui ele olha se os dados estão certos
          return res.status(400).json({ mensagem: 'Dados fornecidos são insuficientes.' });
      }
 
      const objetoFinanceiro = await getObjeto_Financeiro(conta);//busca o objeto finaceiro
 
      if (!objetoFinanceiro) {//verefica a busca
          return res.status(404).json({ mensagem: 'Objeto financeiro não encontrado.' });
      }
 
      if (objetoFinanceiro.senha !== senha) {//ver se a senha foi coloca certa.
          return res.status(403).json({ mensagem: 'Senha incorreta.' });
      }
      objetoFinanceiro.saldo = saldo;
 
      await atualizarObjetivoFinanceiro(conta, objetoFinanceiro);
 
      res.status(200).json({ mensagem: 'Objeto financeiro atualizado com sucesso.', objetoFinanceiro });
 
    } catch (erro) {//isso é para caso der erro
      console.error('Erro ao atualizar objeto financeiro:', erro);
      res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
 };
 
// apaga um objetivo financeiro
export const apagarObjetivoFinanceiro = (req, res) => {}