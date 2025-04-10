// Types for our transaction data
export interface Transaction {
    id: string;
    date: string;
    amount: number;
    description: string;
    category: string;
    accountId: string;
    isFraudulent?: boolean;
    fraudReason?: string;
  }
  
  /**
   * Parse a CSV file into an array of Transaction objects
   */
  export const parseCSV = async (file: File): Promise<Transaction[]> => {
    return new Promise((resolve, reject) => {
      const transactions: Transaction[] = [];
      const reader = new FileReader();
      let headerRow: string[] = [];
      let isFirstRow = true;
  
      reader.onload = (event) => {
        try {
          const text = event.target?.result as string;
          const rows = text.split('\n');
  
          rows.forEach((row, index) => {
            if (!row.trim()) return; // Skip empty rows
  
            const values = row.split(',').map(value => value.trim());
  
            if (isFirstRow) {
              headerRow = values;
              isFirstRow = false;
              return;
            }
  
            // Create transaction object dynamically based on header
            const transaction: any = {};
            headerRow.forEach((header, i) => {
              const value = values[i];
              if (header.toLowerCase() === 'amount') {
                transaction[header.toLowerCase()] = parseFloat(value) || 0;
              } else {
                transaction[header.toLowerCase()] = value;
              }
            });
  
            // Ensure all required fields are present
            if (transaction.id && transaction.date && transaction.amount !== undefined) {
              transactions.push(transaction as Transaction);
            }
          });
  
          resolve(transactions);
        } catch (error) {
          reject(new Error('Error parsing CSV file'));
        }
      };
  
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
  
      // Read the file in chunks
      reader.readAsText(file);
    });
  };
  