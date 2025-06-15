import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { DollarSign, TrendingUp, TrendingDown, Users, PieChart } from "lucide-react"
import { formatCurrency, calculateROI } from "../utills/helpers"

const SummaryCards = ({ investorData }) => {
  const totalInvested = investorData.reduce((sum, investor) => sum + investor.invested, 0)
  const totalProfitLoss = investorData.reduce((sum, investor) => sum + investor.profitLoss, 0)
  const activeInvestors = investorData.filter((investor) => investor.status === "active").length
  const averageAllocation = investorData.reduce((sum, investor) => sum + investor.allocation, 0) / investorData.length

  const cards = [
    {
      title: "Total Invested Capital",
      value: formatCurrency(totalInvested),
      subtitle: "+12.5% from last month",
      icon: DollarSign,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Net Profit/Loss",
      value: formatCurrency(totalProfitLoss),
      subtitle: `${totalProfitLoss >= 0 ? "+" : ""}${calculateROI(totalProfitLoss, totalInvested)}% ROI`,
      icon: totalProfitLoss >= 0 ? TrendingUp : TrendingDown,
      gradient: totalProfitLoss >= 0 ? "from-green-500 to-green-600" : "from-red-500 to-red-600",
    },
    {
      title: "Active Investors",
      value: activeInvestors,
      subtitle: `${investorData.length - activeInvestors} inactive`,
      icon: Users,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Average Allocation",
      value: `${averageAllocation.toFixed(1)}%`,
      subtitle: "Balanced distribution",
      icon: PieChart,
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <Card key={index} className={`bg-gradient-to-br ${card.gradient} text-white border-0`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 opacity-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs opacity-90 mt-1">{card.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SummaryCards
