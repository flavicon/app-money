import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}

interface TransactionProps {
  children: ReactNode,
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children}: TransactionProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
       .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>

    </ TransactionContext.Provider>

  )

}
