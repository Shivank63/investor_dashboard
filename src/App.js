import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/component/ui/Tabs"
import Header from "../src/component/layout/Header"
import SummaryCards from "./component/Dashboard/SummaryCards"
import InvestorTable from "../src/component/Dashboard/InvestorTable"
import Charts from "./component/Dashboard/Charts"
import { investorData, performanceData } from "./component/mockData/mockData"


function App() {
  const exportToPDF = () => {
    alert("Export to PDF functionality would be implemented here using libraries like jsPDF or react-pdf")
  }

  const exportToExcel = () => {
    alert("Export to Excel functionality would be implemented here using libraries like xlsx")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-6 space-y-8">
        <Header onExportPDF={exportToPDF} onExportExcel={exportToExcel} />

        <SummaryCards investorData={investorData} />

        <Tabs defaultValue="investors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="investors" className="space-y-6">
            <InvestorTable investorData={investorData} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Charts investorData={investorData} performanceData={performanceData} />
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Charts investorData={investorData} performanceData={performanceData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
