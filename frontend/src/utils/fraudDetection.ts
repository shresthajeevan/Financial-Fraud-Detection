
import { Transaction } from './csvParser';

// Represents rules for detecting fraud
interface FraudRule {
  id: string;
  name: string;
  description: string;
  check: (transaction: Transaction, allTransactions: Transaction[]) => boolean;
  reason: string;
}

// Rules for detecting potentially fraudulent transactions
const fraudRules: FraudRule[] = [
  {
    id: 'high-amount',
    name: 'High Amount Transaction',
    description: 'Transactions with unusually high amounts',
    check: (transaction: Transaction, allTransactions: Transaction[]) => {
      const avgAmount = allTransactions.reduce((sum, t) => sum + t.amount, 0) / allTransactions.length;
      const threshold = avgAmount * 3; // 3x the average amount is considered suspicious
      return transaction.amount > threshold && transaction.amount > 1000;
    },
    reason: 'Transaction amount is abnormally high'
  },
  {
    id: 'duplicate-transaction',
    name: 'Duplicate Transaction',
    description: 'Multiple transactions with the same amount in a short time period',
    check: (transaction: Transaction, allTransactions: Transaction[]) => {
      // Check for transactions with the same amount on the same day
      const sameDay = transaction.date;
      const sameAmount = transaction.amount;
      
      const duplicates = allTransactions.filter(t => 
        t.id !== transaction.id && 
        t.date === sameDay && 
        Math.abs(t.amount - sameAmount) < 0.01 &&
        t.description === transaction.description
      );
      
      return duplicates.length > 0;
    },
    reason: 'Duplicate transaction detected in a short time period'
  },
  {
    id: 'unusual-category',
    name: 'Unusual Category',
    description: 'Transactions in categories rarely used by this account',
    check: (transaction: Transaction, allTransactions: Transaction[]) => {
      // Get all transactions for this account
      const accountTransactions = allTransactions.filter(t => t.accountId === transaction.accountId);
      
      // Count occurrences of each category
      const categoryCounts: Record<string, number> = {};
      accountTransactions.forEach(t => {
        categoryCounts[t.category] = (categoryCounts[t.category] || 0) + 1;
      });
      
      // Check if this category is rarely used (less than 5% of transactions)
      const categoryCount = categoryCounts[transaction.category] || 0;
      const rareCategoryThreshold = accountTransactions.length * 0.05;
      
      return categoryCount <= rareCategoryThreshold && accountTransactions.length > 10;
    },
    reason: 'Transaction in a rarely used category for this account'
  }
];

export interface FraudDetectionResult {
  transactions: Transaction[];
  fraudulentTransactions: Transaction[];
  safeTransactions: Transaction[];
  stats: {
    totalTransactions: number;
    flaggedTransactions: number;
    flagPercentage: number;
    totalAmount: number;
    fraudAmount: number;
    fraudPercentage: number;
  };
}

/**
 * Analyze transactions for potential fraud
 */
export const detectFraud = (transactions: Transaction[]): FraudDetectionResult => {
  const analyzedTransactions = transactions.map(transaction => {
    // Check each rule against the transaction
    for (const rule of fraudRules) {
      if (rule.check(transaction, transactions)) {
        return {
          ...transaction,
          isFraudulent: true,
          fraudReason: rule.reason
        };
      }
    }
    
    return {
      ...transaction,
      isFraudulent: false
    };
  });
  
  const fraudulentTransactions = analyzedTransactions.filter(t => t.isFraudulent);
  const safeTransactions = analyzedTransactions.filter(t => !t.isFraudulent);
  
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  const fraudAmount = fraudulentTransactions.reduce((sum, t) => sum + t.amount, 0);
  
  const stats = {
    totalTransactions: transactions.length,
    flaggedTransactions: fraudulentTransactions.length,
    flagPercentage: transactions.length > 0 ? (fraudulentTransactions.length / transactions.length) * 100 : 0,
    totalAmount,
    fraudAmount,
    fraudPercentage: totalAmount > 0 ? (fraudAmount / totalAmount) * 100 : 0
  };
  
  return {
    transactions: analyzedTransactions,
    fraudulentTransactions,
    safeTransactions,
    stats
  };
};