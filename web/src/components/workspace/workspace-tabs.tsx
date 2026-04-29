import { Card, CardContent } from '@/components/ui/card'
import { usePosStore } from '@/state/pos-store'
import { ChecksPanel } from '@/features/checks/checks-panel'
import { ExpensesPanel } from '@/features/expenses/expenses-panel'
import { IncomePanel } from '@/features/income/income-panel'
import { InstallmentPanel } from '@/features/installment/installment-panel'

export function WorkspaceTabs() {
  const { activeTab } = usePosStore()

  if (activeTab === 'expenses') return <ExpensesPanel />
  if (activeTab === 'checks') return <ChecksPanel />
  if (activeTab === 'income') return <IncomePanel />
  if (activeTab === 'installment') return <InstallmentPanel />

  return (
    <Card>
      <CardContent className="py-8 text-center text-sm text-muted-foreground">
        Homecredit / external financing module is staged as the next migration slice.
      </CardContent>
    </Card>
  )
}

