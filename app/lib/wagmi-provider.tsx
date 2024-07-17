"use client";

import React, { ReactNode } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import { config, projectId } from "./config";

const zkEVMCardonaTestnet = {
  chainId: 2442,
  name: "Polygon zkEVM Cardona Testnet",
  currency: "ETH",
  explorerUrl: "https://cardona-zkevm.polygonscan.com",
  rpcUrl: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public",
} as any;

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: zkEVMCardonaTestnet,
  enableAnalytics: true, // Optional
  themeMode: "light",
});

export const WagmiProviderComp = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // configure as per your needs
          },
        },
      })
  );

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
export default WagmiProviderComp;
