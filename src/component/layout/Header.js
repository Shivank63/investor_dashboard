import { Button } from "../ui/Button"
import { Download } from "lucide-react"

const Header = ({ onExportPDF, onExportExcel }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PAMM Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Professional Asset Management & Multi-Manager System</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onExportPDF} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
        <Button onClick={onExportExcel} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Excel
        </Button>
      </div>
    </div>
  )
}

export default Header
