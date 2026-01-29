"use client";

import { usePathname } from "next/navigation";
import DashIcon from "@/components/dashboardIcon/DashIcon";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <DashIcon />}
      {children}
    </>
  );
}
