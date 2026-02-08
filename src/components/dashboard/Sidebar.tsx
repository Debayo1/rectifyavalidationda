"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Repeat, History, Settings, HelpCircle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Overview", href: "/next", icon: LayoutDashboard },
    { name: "Wallets", href: "/next", icon: Wallet },
    { name: "Transactions", href: "/next", icon: Repeat },
    { name: "History", href: "/next", icon: History },
    { name: "Settings", href: "/next", icon: Settings },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col hidden md:flex z-50">
            <div className="p-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        E
                    </div>
                    <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        EVM RESOLVE
                    </span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-blue-600/10 text-blue-400 font-medium"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-blue-400" : "text-gray-500 group-hover:text-white")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/5 space-y-2">
                <Link
                    href="/documentation"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                    <HelpCircle className="w-5 h-5 text-gray-500" />
                    Help & Support
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium"
                >
                    <LogOut className="w-5 h-5" />
                    Disconnect
                </Link>
            </div>
        </aside>
    );
}
