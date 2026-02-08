"use client";

import { useState } from "react";
import { WalletGrid } from "@/components/WalletGrid";
import { ConnectModal } from "@/components/ConnectModal";

export default function ConnectPage() {
    const [selectedWallet, setSelectedWallet] = useState<{ name: string; icon: string } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWalletSelect = (wallet: { name: string; icon: string }) => {
        setSelectedWallet(wallet);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedWallet(null), 300); // Clear after animation
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl w-full text-center mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Secure Connection
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent uppercase drop-shadow-2xl">
                    Connect Wallet
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                    Establish a secure, encrypted connection to the <span className="text-white font-medium">Decentralized Protocol</span>.
                    <br className="hidden sm:block" />
                    Select your wallet provider below.
                </p>
            </div>

            <WalletGrid onSelect={handleWalletSelect} />

            {selectedWallet && (
                <ConnectModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    walletName={selectedWallet.name}
                    walletIcon={selectedWallet.icon}
                />
            )}
        </div>
    );
}
