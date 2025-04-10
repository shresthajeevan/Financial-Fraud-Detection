
import React from 'react';
import { FraudDetectionResult } from '@/utils/fraudDetection';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface FraudStatsProps {
  result: FraudDetectionResult;
}

const FraudStats: React.FC<FraudStatsProps> = ({ result }) => {
  const { stats } = result;
  
  // Format amounts
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Chart data for transaction distribution
  const transactionData = [
    {
      name: 'Safe',
      value: stats.totalTransactions - stats.flaggedTransactions,
      fill: '#22C55E'
    },
    {
      name: 'Flagged',
      value: stats.flaggedTransactions,
      fill: '#EF4444'
    }
  ];

  // Chart data for amount distribution
  const amountData = [
    {
      name: 'Safe',
      value: stats.totalAmount - stats.fraudAmount,
      fill: '#22C55E'
    },
    {
      name: 'Flagged',
      value: stats.fraudAmount,
      fill: '#EF4444'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Flagged Transactions</CardTitle>
          <CardDescription>
            {stats.flaggedTransactions} out of {stats.totalTransactions} transactions flagged
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span>{(stats.flagPercentage).toFixed(1)}% flagged</span>
            <span className="text-muted-foreground">{stats.flaggedTransactions} / {stats.totalTransactions}</span>
          </div>
          <Progress value={stats.flagPercentage} className="h-2" />
          
          <div className="h-40 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={40} />
                <Tooltip 
                  formatter={(value) => [`${value} transactions`, '']}
                  labelFormatter={() => ''}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {transactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Flagged Amounts</CardTitle>
          <CardDescription>
            {formatAmount(stats.fraudAmount)} out of {formatAmount(stats.totalAmount)} flagged
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span>{(stats.fraudPercentage).toFixed(1)}% flagged</span>
            <span className="text-muted-foreground">{formatAmount(stats.fraudAmount)} / {formatAmount(stats.totalAmount)}</span>
          </div>
          <Progress value={stats.fraudPercentage} className="h-2" />
          
          <div className="h-40 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={amountData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={40} />
                <Tooltip 
                  formatter={(value) => [`${formatAmount(value as number)}`, '']}
                  labelFormatter={() => ''}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {amountData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FraudStats;