import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHeader,
  TableDate,
  THead,
  TBody,
  TableRow,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <THead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </THead>

      <TBody>
        {items.map(items => (
          <TableRow key={items.id}>
            <TableDate>{items.type}</TableDate>
            <TableDate>{items.amount}</TableDate>
            <TableDate>{items.currency}</TableDate>
          </TableRow>
        ))}
      </TBody>
    </TransactionsTable>
  );
};

TransactionHistory.prototype = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
