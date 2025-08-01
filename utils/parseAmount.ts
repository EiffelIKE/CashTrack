export const parseAmount = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => {
  return (
    amount?.toLocaleString('en-US', { style: 'currency', currency }) || '0'
  );
};
