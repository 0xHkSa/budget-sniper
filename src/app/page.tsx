"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Expense } from "@/types/expense"
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetchExpenses()
  }, [])

  const fetchExpenses = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/expenses')
      const data = await response.json()
      
      if (data.success) {
        setExpenses(data.data || [])
      } else {
        setError(data.error || 'Failed to fetch expenses')
      }
    } catch (err) {
      setError('Failed to fetch expenses')
      console.error('Error fetching expenses:', err)
    } finally {
      setLoading(false)
    }
  }

  // Calculate metrics from real data
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const avgDaily = expenses.length > 0 ? totalSpent / expenses.length : 0
  const lastExpense = expenses.length > 0 ? expenses[0] : null
  const expenseCount = expenses.length

  // Prepare chart data
  const categoryData = expenses.reduce((acc, expense) => {
    const category = expense.category || 'uncategorized'
    if (acc[category]) {
      acc[category] += expense.amount
    } else {
      acc[category] = expense.amount
    }
    return acc
  }, {} as Record<string, number>)

  const pieChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2)),
    color: getCategoryColor(name)
  }))

  const dailyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString()
    if (acc[date]) {
      acc[date] += expense.amount
    } else {
      acc[date] = expense.amount
    }
    return acc
  }, {} as Record<string, number>)

  const barChartData = Object.entries(dailyData)
    .map(([date, amount]) => ({ date, amount: parseFloat(amount.toFixed(2)) }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  function getCategoryColor(category: string) {
    switch (category) {
      case 'food': return '#ef4444'
      case 'shopping': return '#3b82f6'
      case 'gas': return '#10b981'
      case 'transportation': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#6b7280']

  if (!mounted) return null

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black dark:border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading expenses...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button 
            onClick={fetchExpenses}
            className="bg-gray-100 dark:bg-black border border-gray-200 dark:border-white rounded-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-white p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">BUDGET SNIPER</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search expenses..."
                className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white rounded-lg px-4 py-2 pr-10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900 border border-gray-200 dark:border-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900 border border-gray-200 dark:border-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
              Add Expense
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-white">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black dark:text-white">${totalSpent.toFixed(2)}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total spent</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-white">Avg Daily</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black dark:text-white">${avgDaily.toFixed(2)}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Per expense</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-white">Last Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black dark:text-white">
                {lastExpense ? `$${lastExpense.amount.toFixed(2)}` : '$0.00'}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {lastExpense ? lastExpense.merchant : 'No expenses'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-white">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black dark:text-white">{expenseCount}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total count</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Spending by Category Pie Chart */}
          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black dark:text-white">Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
              {pieChartData.length > 0 ? (
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          boxShadow: 'none'
                        }}
                        formatter={(value: number, name) => [`$${value.toFixed(2)}`, '']}
                        labelFormatter={() => ''}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-80 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  No data to display
                </div>
              )}
            </CardContent>
          </Card>

          {/* Daily Spending Line Chart */}
          <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-black dark:text-white">Daily Spending Trend</CardTitle>
            </CardHeader>
            <CardContent>
              {barChartData.length > 0 ? (
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={barChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                      <XAxis 
                        dataKey="date" 
                        stroke={theme === 'dark' ? '#ffffff' : '#000000'}
                        fontSize={12}
                        tick={{ fill: theme === 'dark' ? '#ffffff' : '#000000' }}
                      />
                      <YAxis 
                        stroke={theme === 'dark' ? '#ffffff' : '#000000'}
                        fontSize={12}
                        tick={{ fill: theme === 'dark' ? '#ffffff' : '#000000' }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
                          border: theme === 'dark' ? '1px solid #ffffff' : '1px solid #000000',
                          borderRadius: '8px',
                          color: theme === 'dark' ? '#ffffff' : '#000000'
                        }}
                        formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']}
                        labelStyle={{
                          color: theme === 'dark' ? '#ffffff' : '#000000'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke={theme === 'dark' ? '#ffffff' : '#000000'}
                        strokeWidth={3}
                        dot={{ fill: theme === 'dark' ? '#ffffff' : '#000000', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: theme === 'dark' ? '#ffffff' : '#000000', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-80 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  No data to display
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Expenses */}
        <Card className="bg-gray-50 dark:bg-black border-gray-200 dark:border-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-black dark:text-white">Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenses.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  No expenses found. Add your first expense!
                </div>
              ) : (
                expenses.slice(0, 5).map((expense) => {
                  const getCategoryIcon = (category: string) => {
                    switch (category) {
                      case 'food': return '🍽️'
                      case 'shopping': return '🛒'
                      case 'gas': return '⛽'
                      case 'transportation': return '🚗'
                      default: return '💰'
                    }
                  }

                  const formatDate = (dateString: string) => {
                    const date = new Date(dateString)
                    const now = new Date()
                    const diffTime = Math.abs(now.getTime() - date.getTime())
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                    
                    if (diffDays === 1) return 'Today'
                    if (diffDays === 2) return 'Yesterday'
                    return `${diffDays - 1} days ago`
                  }

                  return (
                    <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-black border border-gray-200 dark:border-white rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-black border border-gray-300 dark:border-white rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium">{getCategoryIcon(expense.category || '')}</span>
                        </div>
                        <div>
                          <div className="font-medium text-black dark:text-white">{expense.merchant}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{formatDate(expense.date)}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-gray-200 dark:bg-black border border-gray-300 dark:border-white text-gray-800 dark:text-white">
                          {expense.category || 'uncategorized'}
                        </Badge>
                        <div className="text-lg font-semibold text-black dark:text-white">${expense.amount.toFixed(2)}</div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
