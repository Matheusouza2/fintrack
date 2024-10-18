// Cria regra de negócio para salvar transferência
export async function CriarTransferencia(req, res) { 
    try {
        // Extrai os parâmetros da requisição (conta de origem, conta de destino, valor e descrição)
        const { contaOrigem, contaDestino, valor, descricao } = req.body; 
  
        let data; // Variável para armazenar a data da transferência
  
        // Verifica se o corpo da requisição contém a data
        if (req.body.data) { 
            // Converte a string recebida para um objeto Date
            data = new Date(req.body.data); 
            // Verifica se a data é válida
            if (isNaN(data.getTime())) { 
                // Retorna erro se a data for inválida
                return res.status(400).send({ message: "Data inválida." });
            }
        } else { 
            // Caso não tenha data, usa a data atual
            data = new Date();
        }
  
        // Verifica se todos os parâmetros necessários foram fornecidos
        if (!contaOrigem || !contaDestino || valor == null || !descricao) {
            return res.status(400).send({ message: "Parâmetros inválidos." });
        }
  
        // Verifica se o valor é um número válido e maior que zero
        if (typeof valor !== 'number' || valor <= 0) {
            return res.status(400).send({ message: "Valor inválido." });
        }
  
        // Verifica se a conta de origem tem saldo suficiente
        if (contaOrigem.saldo < valor) {
            return res.status(400).send({ message: "Saldo insuficiente na conta de origem." });
        }
  
        // Atualiza o saldo da conta de origem e da conta de destino
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
  
        // Cria um objeto de transferência com os detalhes
        const transferencia = {
            contaOrigem: contaOrigem.numero,  // Número da conta de origem
            contaDestino: contaDestino.numero, // Número da conta de destino
            valor, // Valor transferido
            data,  // Data da transferência
            descricao // Descrição da transferência
        };
  
        // Responde à requisição com sucesso e envia os detalhes da transferência
        res.status(200).send({
            message: "Transferência realizada com sucesso!",
            transferencia
        });
    } catch (error) {
        // Loga o erro no console e responde com erro de servidor
        console.error("Erro ao criar transferência:", error);
        res.status(500).send({ message: "Erro interno do servidor." });
    }
  }
  
  // Função para alterar uma transferência (a ser implementada)
  export async function AlterarTransferencia(id){ 
  
  }
  
  // Função para deletar uma transferência
  export async function DeletarTransferencia(id) { 
      
  }
  
  // Função para listar todas as transferências
  export async function ListarTransferencia() { 
      
  }
  
  // Função para mostrar uma transferência específica por ID
  export async function MostrarPorId(id) { 
      
  }
  