import { Settings, Keyboard, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { ModeToggle } from '@/components/mode-toggle'
import { SettingsDialog } from '@/components/dialogs/settings-dialog'
import { ShortcutGuideDialog } from '@/components/dialogs/shortcut-guide-dialog'
import { MonthlyCalendarDialog } from '@/components/dialogs/monthly-calendar-dialog'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePosStore } from '@/state/pos-store'
import type { PosTab } from '@/types/pos'

const tabItems: { id: PosTab; label: string }[] = [
  { id: 'expenses', label: 'Expenses' },
  { id: 'checks', label: 'Check' },
  { id: 'income', label: 'Other' },
  { id: 'installment', label: 'Installment' },
  { id: 'financing', label: 'Credit' },
]

export function TopNav() {
  const { setTheme, theme } = useTheme()
  const { activeTab, setActiveTab, currentDate, changeDate, goToToday, mobileSidebarOpen, setMobileSidebarOpen } = usePosStore()

  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [shortcutOpen, setShortcutOpen] = React.useState(false)

  const dateLabel = currentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b bg-background/95 px-3 backdrop-blur supports-backdrop-filter:bg-background/80">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as PosTab)} className="min-w-0 flex-1">
          <TabsList className="w-full justify-start overflow-x-auto" variant="line">
            {tabItems.map((item) => (
              <TabsTrigger 
                key={item.id} 
                value={item.id} 
                className="text-xs"
                onMouseEnter={() => setActiveTab(item.id)}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="hidden items-center gap-1 rounded-md border bg-muted/40 p-1 lg:flex">
          <Button variant="ghost" size="icon-xs" onClick={() => changeDate(-1)}>
            <ChevronLeft className="size-3" />
          </Button>
          <MonthlyCalendarDialog>
            <button className="min-w-25 px-1 text-center text-xs font-semibold hover:text-foreground text-muted-foreground transition-colors">{dateLabel}</button>
          </MonthlyCalendarDialog>
          <Button variant="ghost" size="icon-xs" onClick={() => changeDate(1)}>
            <ChevronRight className="size-3" />
          </Button>
          <Button variant="ghost" size="xs" onClick={goToToday}>
            TODAY
          </Button>
        </div>

        <Button variant="outline" size="icon-sm" onClick={() => setShortcutOpen(true)}>
          <Keyboard className="size-4" />
        </Button>
        <Button variant="outline" size="icon-sm" onClick={() => setSettingsOpen(true)}>
          <Settings className="size-4" />
        </Button>
        <ModeToggle />
        <Button
          variant="outline"
          size="icon-sm"
          className="md:hidden"
          onClick={() => setMobileSidebarOpen((v) => !v)}
          aria-label="Toggle calculations sidebar"
        >
          =
        </Button>
      </header>

      <SettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        onQuickTheme={(nextTheme) => setTheme(nextTheme)}
        currentTheme={theme ?? 'dark'}
      />
      <ShortcutGuideDialog open={shortcutOpen} onOpenChange={setShortcutOpen} />

      {mobileSidebarOpen ? (
        <button
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close sidebar overlay"
        />
      ) : null}
    </>
  )
}

