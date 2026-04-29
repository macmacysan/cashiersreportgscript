export type PosTab = 'expenses' | 'checks' | 'income' | 'installment' | 'financing'

export type ExpenseType = 'Company Expenses' | 'Purchases' | 'Drawings'
export type VatType = 'Vat' | 'Non-Vat'

export type CheckType = 'Bank Check' | 'Bank Transfer' | 'GCash' | 'Other E-Wallet'
export type IncomeType = 'Load' | 'Cash Reimbursement' | 'Others'

export type ExpenseEntry = {
  id: string
  type: ExpenseType
  description: string
  receipt: string
  category: string
  vat: VatType
  amount: number
}

export type CheckEntry = {
  id: string
  type: CheckType
  bank: string
  account: string
  checkNo: string
  receipt: string
  date: string
  amount: number
}

export type IncomeEntry = {
  id: string
  particular: IncomeType
  remarks: string
  receipt: string
  date: string
  amount: number
}

export type InstallmentEntry = {
  id: string
  branch: string
  lname: string
  fname: string
  mname: string
  suffix: string
  street: string
  brgy: string
  city: string
  prov: string
  occ: string
  contact: string
  agent: string
  ref: string
  added: string
}

export type AppSettings = {
  compactRows: boolean
  showVatColumn: boolean
  cashierName: string
  dailySalesTarget: number
  highlightVariance: boolean
  autoCalculateTotals: boolean
  sidebarAlwaysDark: boolean
}

export type SidebarState = {
  openingCash: number
  salesInvoiceQty: number
  salesInvoice: number
  siTradingQty: number
  siTrading: number
  deliveryReceiptQty: number
  deliveryReceipt: number
  bobsPawnshopQty: number
  bobsPawnshop: number
  collections: number
  credits: number
  cashRemitted: number
  denominationQuantities: Record<string, number>
  deductions: Record<string, number>
}

