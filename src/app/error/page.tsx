"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-gray-900/50 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 text-center shadow-2xl relative z-10"
            >
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-red-500/30">
                    <ShieldAlert className="w-10 h-10 text-red-500" />
                </div>

                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Connection Interrupted
                </h1>

                <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 mb-8">
                    <p className="text-gray-300 leading-relaxed">
                        Something went wrong but the team will fix it as soon as possible.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
}
