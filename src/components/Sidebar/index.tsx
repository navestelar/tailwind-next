import { Cog, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./Logo";
import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "@/components/Input"

export function Sidebar() {
  return (
    <aside className="border-r flex flex-col gap-6 border-zinc-200 px-5 py-8 ">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="size-5 text-zinc-500" />
        </Input.Prefix>
        
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}