"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import  NavDocuments  from "@/components/nav-documents/nav-documents"
import  NavMain  from "@/components/nav-main/nav-main"
import  NavSecondary  from "@/components/nav-secondary/nav-secondary"
import  NavUser  from "@/components/nav-user/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  user: {
    name: "User Name",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Applications",
      url: "dashboard/Applications",
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "dashboard/Analytics",
      icon: BarChartIcon,
    },
    {
      title: "Property",
      url: "dashboard/property",
      icon: FolderIcon,
    },
    {
      title: "Students",
      url: "dashboard/students",
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "dashboard/Capture",
      items: [
        { title: "Active Proposals", url: "dashboard/Proposals" },
        { title: "Archived", url: "dashboard/Archived" },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "dashboard/",
      items: [
        { title: "Active Proposals", url: "dashboard/" },
        { title: "Archived", url: "dashboard/" },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "dashboard/",
      items: [
        { title: "Active Proposals", url: "dashboard/" },
        { title: "Archived", url: "dashboard/" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "dashboard/Settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "dashboard/Get-help",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "dashboard/Search",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "dashboard/data-library",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "dashboard/Reports",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      url: "dashboard/Word-assistant",
      icon: FileIcon,
    },
  ],
}

export default function AppSidebar(props) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="dashboard/">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">CampusKey Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
