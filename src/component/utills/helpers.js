// Utility functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export const calculateROI = (profitLoss, invested) => {
  return ((profitLoss / invested) * 100).toFixed(2)
}
