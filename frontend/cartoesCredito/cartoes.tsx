import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const TelaCartoes: React.FC = () => {
  const cartoes = [
    { banco: "Banco do Brasil", fatura: { status: "Fechada", valor: "R$0,00" }, limite: { total: "R$0,00", aberto: "R$0,00", disponivel: "R$0,00" }, fechamento: "05/10", vencimento: "15/10" },
    { banco: "Nubank", fatura: { status: "Aberta", valor: "R$0,00" }, limite: { total: "R$0,00", aberto: "R$0,00", disponivel: "R$0,00" }, fechamento: "10/10", vencimento: "20/10" },
    { banco: "Inter", fatura: { status: "Fechada", valor: "R$0,00" }, limite: { total: "R$0,00", aberto: "R$0,00", disponivel: "R$0,00" }, fechamento: "15/10", vencimento: "25/10" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Cartões</Text>
      </View>
      <ScrollView>
        {cartoes.map((cartao, index) => (
          <View key={index} style={styles.cartao}>
            <Text style={styles.nomeBanco}>{cartao.banco}</Text>
            <Text style={styles.limite}>Limite: {cartao.limite.total}</Text>
            <Text style={styles.limite}>Limite em aberto: {cartao.limite.aberto}</Text>
            <Text style={styles.limite}>Limite disponível: {cartao.limite.disponivel}</Text>
            <View style={styles.barrinha} />
            <Text style={styles.conta}>Conta: {cartao.banco}</Text>
            <Text style={styles.dados}>Fechamento: {cartao.fatura.status} - Vencimento: {cartao.vencimento}</Text>
            <Text style={styles.fatura}>Fatura: {cartao.fatura.status} - Valor: {cartao.fatura.valor}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TelaCartoes;
