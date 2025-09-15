import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <Bell size={'1rem'} />
          <Button variant="ghost" size="sm" className="sm:flex">
            <Avatar>
              <AvatarImage src={'/images/avatar.jpg'} alt="Profile Picture of User" sizes="10vw" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="sr-only">Avatar icon</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
