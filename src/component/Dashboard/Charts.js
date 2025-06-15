import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import {
  PieChart as RechartsPieChart,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Pie,
} from "recharts"
import { formatCurrency } from "../utills/helpers"
import { COLORS } from "../mockData/mockData"

const Charts = ({ investorData, performanceData }) => {
  const allocationData = investorData.map((investor) => ({
    name: investor.name,
    value: investor.allocation,
    amount: investor.invested,
  }))

  return (
    <div className="space-y-6">
      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Allocation Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Allocation Distribution</CardTitle>
            <CardDescription>Visual breakdown of capital allocation across investors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, "Allocation"]} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Investment Distribution Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Amount Distribution</CardTitle>
            <CardDescription>Capital distribution by investor amount</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={allocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
                <YAxis />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), "Investment"]} />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
          <CardDescription>Monthly profit/loss trends and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [formatCurrency(Number(value)), ""]} />
              <Legend />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Profit" />
              <Line type="monotone" dataKey="loss" stroke="#ef4444" strokeWidth={3} name="Loss" />
              <Line type="monotone" dataKey="net" stroke="#3b82f6" strokeWidth={3} name="Net P&L" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Charts
