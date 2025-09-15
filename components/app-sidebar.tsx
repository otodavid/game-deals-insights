"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChartColumnStacked,
  Dices,
  Gamepad2,
  LayoutDashboardIcon,
  MessageCircleQuestionMark,
  Settings,
  Store,
} from "lucide-react";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: "Games",
        url: "#",
        icon: Dices,
      },
      {
        title: "Stores",
        url: "#",
        icon: Store,
      },
      {
        title: "Analytics",
        url: "#",
        icon: ChartColumnStacked,
      },
    ],

    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: MessageCircleQuestionMark,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Gamepad2 className="!size-5" />
                <span className="text-base font-semibold">Game Saver</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
