//Cria regra de negocio para slavar transferência
export async function CriarTransferencia(req, res) {
  try {
      const { contaOrigem, contaDestino, valor, descricao } = req.body;

      let data;

      if (req.body.data) {
          data = new Date(req.body.data);
          if (isNaN(data.getTime())) {
              return res.status(400).send({ message: "Data inválida." });
          }
      } else {
          data = new Date();
      }

      if (!contaOrigem || !contaDestino || valor == null || !descricao) {
          return res.status(400).send({ message: "Parâmetros inválidos." });
      }

      if (typeof valor !== 'number' || valor <= 0) {
          return res.status(400).send({ message: "Valor inválido." });
      }

            if (contaOrigem.saldo < valor) {
          return res.status(400).send({ message: "Saldo insuficiente na conta de origem." });
      }

      contaOrigem.saldo -= valor;
      contaDestino.saldo += valor;

      const transferencia = {
          contaOrigem: contaOrigem.numero,  
          contaDestino: contaDestino.numero,
          valor,
          data,  
          descricao
      };

      res.status(200).send({
          message: "Transferência realizada com sucesso!",
          transferencia
      });
  } catch (error) {
      console.error("Erro ao criar transferência:", error);
      res.status(500).send({ message: "Erro interno do servidor." });
  }
}

  
export async function AlterarTransferencia(id){

}

/* 
Apaga uma transferencia 
*/
export async function DeletarTransferencia(id) {
    
}

/* 
Lista todas as transferencias 
*/
export async function ListarTransferencia() {
    
}

/* 
Mostra uma transferencia em especifico
*/
export async function MostrarPorId(id) {
    
}
