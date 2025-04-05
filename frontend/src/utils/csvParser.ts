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
      const reader = new FileReader();
  
      reader.onload = (event) => {
        try {
          const csvData = event.target?.result as string;
          const lines = csvData.split('\n');
  
          // Get headers from the first line
          const headers = lines[0].split(',').map((header) => header.trim());
  
          const transactions: Transaction[] = [];
  
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
  
            const values = line.split(',');
            const transaction: any = {};
  
            headers.forEach((header, index) => {
              let value = values[index]?.trim();
  
              if (header === 'amount') {
                const numValue = parseFloat(value);
                transaction[header] = isNaN(numValue) ? 0 : numValue;
              } else if (header === 'isFraudulent') {
                transaction[header] = value?.toLowerCase() === 'true';
              } else {
                transaction[header] = value;
              }
            });
  
            // Ensure all required fields exist
            const requiredFields = ['id', 'date', 'amount', 'description', 'category', 'accountId'];
            const hasAllFields = requiredFields.every((field) => transaction[field] !== undefined);
  
            if (hasAllFields) {
              transactions.push(transaction as Transaction);
            }
          }
  
          resolve(transactions);
        } catch (error) {
          reject(new Error('Failed to parse CSV: ' + error));
        }
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
  
      reader.readAsText(file);
    });
  };
  