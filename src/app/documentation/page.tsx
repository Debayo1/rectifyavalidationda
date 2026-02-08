"use client";

import Link from "next/link";
import { Book, Shield, Zap, Lock, ArrowLeft, FileText, Code, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Protocol Overview",
        icon: Book,
        content: "Our decentralized protocol utilizes advanced algorithmic validation to ensure secure and efficient interactions across the EVM ecosystem. Designed for high-throughput and low-latency validation.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        title: "Security Architecture",
        icon: Shield,
        content: "Built on military-grade encryption standards (AES-256) and fully audited smart contracts. Verification processes run in isolated environments to prevent cross-contamination of state.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        title: "Instant Rectification",
        icon: Zap,
        content: "Automated scripts handle common errors such as synchronization delays, gas fee discrepancies, and transaction nonces. AI-driven analysis predicts and resolves potential bottlenecks.",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10"
    },
    {
        title: "End-to-End Encryption",
        icon: Lock,
        content: "All data transmission is secured via TLS 1.3. User keys are never stored on centralized servers and are processed locally within the secure enclave of the browser.",
        color: "text-green-400",
        bg: "bg-green-500/10"
    }
];

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">

            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 group">
                    <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        EVM DOCS
                    </span>
                </Link>
                <div className="text-sm text-gray-500 font-mono">v2.4.0-stable</div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-20 relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6">
                        <FileText className="w-3 h-3" />
                        Technical Reference
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Protocol <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Documentation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Comprehensive referencing for the EVM Resolve Protocol. Understand the security mechanisms, validation layers, and automated rectification engines.
                    </p>
                </motion.div>

                {/* Documentation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all"
                        >
                            <div className={`w-12 h-12 ${section.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <section.icon className={`w-6 h-6 ${section.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* API Reference Placeholder */}
                <div className="mt-20 p-8 rounded-3xl bg-black border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 bg-purple-500/10 blur-[60px] rounded-full" />
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Code className="w-6 h-6 text-purple-400" />
                        Integration Standard
                    </h2>
                    <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-gray-300 overflow-x-auto border border-white/5">
                        <div className="flex gap-2 mb-2 opacity-50">
                            <span className="text-red-400">POST</span> /v2/validate/handshake
                        </div>
                        <pre className="text-blue-300">{`{
  "protocol": "evm_secure_v2",
  "timestamp": ${Date.now()},
  "encryption": "AES-256-GCM",
  "payload": "encrypted_buffer..."
}`}</pre>
                    </div>
                </div>

            </main>
        </div>
    );
}
