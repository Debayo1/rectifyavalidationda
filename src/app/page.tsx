"use client";

import Link from "next/link";
import { ShieldCheck, Lock, Zap, Server, CheckCircle, Database, RefreshCw, AlertTriangle, Gift, Layers, Globe, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const aiFunctions = [
  { name: "Validation", icon: CheckCircle },
  { name: "Assets Recovery", icon: Database },
  { name: "Presale Issues", icon: AlertTriangle },
  { name: "Claiming", icon: Gift },
  { name: "Migration", icon: RefreshCw },
  { name: "Staking/Unstaking", icon: Layers },
  { name: "Claim Buyback Token", icon: DollarSign },
  { name: "Transaction Error", icon: AlertTriangle },
  { name: "Claim Reward", icon: Gift },
  { name: "Claim Airdrop", icon: Globe },
  { name: "Bridge", icon: Server },
  { name: "Liquidity", icon: Zap },
  { name: "Faucet", icon: RefreshCw },
  { name: "Exorbitant Gas Fees", icon: AlertTriangle },
  { name: "Wallet Validation", icon: ShieldCheck },
  { name: "Other Rectifications", icon: Server },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-transparent backdrop-blur-xl sticky top-0 z-50">
        <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          EVM RESOLVE
        </div>
        <Link
          href="/connect"
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded-full font-medium transition-all text-sm backdrop-blur-sm"
        >
          Connect Wallet
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Secure Protocol V2
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 uppercase drop-shadow-2xl">
            Advanced AI <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Decentralized Protocol</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Our protocols feature a suite of purpose-built tools for <span className="text-white font-medium">instant rectification</span>.
            Wallets interacting with our protocol are 100% secured by fully audited smart contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all shadow-xl shadow-white/5"
            >
              Connect Wallet
            </Link>
            <Link
              href="/documentation"
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm inline-flex items-center justify-center"
            >
              View Documentation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats / Security Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase mb-3">Security Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Bulletproof Design</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "100%", title: "Test Transactions", desc: "Risk-free simulation protocol defines transactions without real account impact.", color: "text-blue-500", border: "hover:border-blue-500/50" },
              { label: "256", title: "Keccak Encryption", desc: "Military-grade encryption matching Ethereum's native security standards.", color: "text-purple-500", border: "hover:border-purple-500/50" },
              { label: "100%", title: "Gas Refunds", desc: "Automated gas refund mechanism for all verification transactions.", color: "text-green-500", border: "hover:border-green-500/50" },
              { label: "100%", title: "Safe Tools", desc: "Real-time alerts for unusual distribution and deployed contract warnings.", color: "text-yellow-500", border: "hover:border-yellow-500/50" }
            ].map((card, idx) => (
              <div key={idx} className={`p-8 bg-white/5 border border-white/5 rounded-3xl ${card.border} transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 group`}>
                <h4 className={`text-5xl font-black ${card.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>{card.label}</h4>
                <h5 className="text-xl font-bold text-white mb-3">{card.title}</h5>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Functions Grid */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-purple-400 tracking-[0.2em] uppercase mb-3">Protocol Utilities</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Select AI Function</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aiFunctions.map((item, idx) => (
              <Link
                key={idx}
                href="/connect"
                className="flex items-center gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.08] hover:border-white/10 transition-all group hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors text-gray-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to synchronize?</h2>
          <Link
            href="/connect"
            className="inline-flex items-center px-10 py-5 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-xl transition-all shadow-xl shadow-white/10 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5 bg-[#050505]">
        <div className="flex justify-center gap-6 mb-4">
          {/* Fake footer links for aesthetics */}
          <span className="cursor-pointer hover:text-gray-400">Privacy</span>
          <span className="cursor-pointer hover:text-gray-400">Terms</span>
          <span className="cursor-pointer hover:text-gray-400">Documentation</span>
        </div>
        &copy; 2024 EVM Resolve Protocol. All rights reserved.
      </footer>
    </div>
  );
}
