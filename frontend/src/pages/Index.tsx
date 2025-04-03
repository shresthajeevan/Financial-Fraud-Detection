const Index = () => {
  return (
    <div className="container py-8">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="h-10 w-10 text-highlight mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold">Fraud Finder</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload your financial transaction data to detect potentially fraudulent activities.
          Our system analyzes patterns and flags suspicious transactions.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="h-5 w-5 text-highlight mr-2" />
            <h2 className="text-xl font-semibold">Upload Transaction Data</h2>
          </div>
          {/* FileUpload component */}
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="h-5 w-5 text-highlight mr-2" />
              <h2 className="text-xl font-semibold">Analysis Results</h2>
            </div>
            <button className="button-outline">
              Analyze Another File
            </button>
          </div>
          {/* Dashboard component */}
        </div>
      </div>
    </div>
  );
};

export default Index;
