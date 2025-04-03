const Dashboard: React.FC<{ result: any }> = ({ result }) => {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
        
        <div className="mb-6">
          {/* FraudStats Component */}
        </div>
        
        <div className="tabs">
          <div className="tabs-list grid grid-cols-3 w-full md:w-[400px]">
            <div className="tab-trigger">All Transactions</div>
            <div className="tab-trigger text-fraud">
              {/* Alert Icon */}
              Flagged
            </div>
            <div className="tab-trigger text-safe">
              {/* Shield Icon */}
              Safe
            </div>
          </div>
          
          <div className="tab-content mt-4">
            {/* TransactionTable for All Transactions */}
          </div>
          
          <div className="tab-content mt-4">
            {/* TransactionTable for Flagged Transactions */}
          </div>
          
          <div className="tab-content mt-4">
            {/* TransactionTable for Safe Transactions */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  