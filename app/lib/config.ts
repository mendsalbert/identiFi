// lib/config.ts

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId = "6a1ea1cb75d52415bb4110fa68566498";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal Example",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const zkEVMCardonaTestnet = {
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
  },
  blockExplorers: {
    default: {
      name: "Apothem Explorer",
      url: "https://cardona-zkevm.polygonscan.com",
    },
  },
  testnet: true,
} as any;

export const config = defaultWagmiConfig({
  chains: [zkEVMCardonaTestnet],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableEmail: true,
});
