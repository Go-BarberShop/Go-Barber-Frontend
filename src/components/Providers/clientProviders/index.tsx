"use client";

import ProviderQuery from "@/components/Providers/ProviderQuery";
import ProviderRedux from "@/components/Providers/provideRedux";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ProviderQuery>
      <ProviderRedux>
        {children}
      </ProviderRedux>
    </ProviderQuery>
  );
}
