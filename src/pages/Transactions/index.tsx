import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvedor de Site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>20/08/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvedor de Site</td>
              <td>-R$ 59,00</td>
              <td>Alimentação</td>
              <td>20/08/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
