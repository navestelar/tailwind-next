import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/navestelar.png"
        className="size-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Navestelar
        </span>
        <span className="truncate text-sm text-zinc-500">
          navestelar@ntl.com.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
