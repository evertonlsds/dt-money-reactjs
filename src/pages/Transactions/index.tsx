import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

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
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>20/08/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvedor de Site</td>
              <td>
                <PriceHighLight variant="outcome">-R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>20/08/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
