"use client";
import { defineChain } from "viem";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import WagmiProviderComp from "./lib/wagmi-provider";
import { config } from "./lib/config";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const zkEVMCardonaTestnet = defineChain({
  id: 2442,
  name: "Polygon zkEVM Cardona Testnet",
  network: "Polygon zkEVM Cardona Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Polygon zkEVM Cardona Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://cardona-zkevm.polygonscan.com" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="clwci9fzm00w7ro85bx6jarr5"
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: zkEVMCardonaTestnet,
            supportedChains: [zkEVMCardonaTestnet],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
