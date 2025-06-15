
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Badge } from "../ui/Badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu"
import { Search, ArrowUpDown, Eye, MoreHorizontal, Download } from "lucide-react"
import { formatCurrency } from "../utills/helpers"

const InvestorTable = ({ investorData }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterStatus, setFilterStatus] = useState("all")
  const [sortOrder, setSortOrder] = useState("asc")

  // Filter and sort data
  const filteredData = investorData
    .filter((investor) => {
      const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = filterStatus === "all" || investor.status === filterStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      let aValue = a[sortBy]
      let bValue = b[sortBy]

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investor Management</CardTitle>
        <CardDescription>Manage and monitor all investor accounts and their performance</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search investors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Investor Table */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                  <div className="flex items-center gap-2">
                    Investor Name
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("invested")}>
                  <div className="flex items-center gap-2">
                    Invested Amount
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("allocation")}>
                  <div className="flex items-center gap-2">
                    Allocation %
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("profitLoss")}>
                  <div className="flex items-center gap-2">
                    Profit/Loss
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((investor) => (
                <TableRow key={investor.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-semibold">{investor.name}</div>
                      <div className="text-sm text-gray-500">{investor.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">{formatCurrency(investor.invested)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.min(investor.allocation * 2, 100)}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{investor.allocation}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`font-mono font-semibold ${
                        investor.profitLoss >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {investor.profitLoss >= 0 ? "+" : ""}
                      {formatCurrency(investor.profitLoss)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={investor.status === "active" ? "default" : "secondary"}>{investor.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Export Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default InvestorTable
