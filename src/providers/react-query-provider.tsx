import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const defaultOptions = {
  queries: {
    retry: 3,
    keepPreviousData: true,
  },
};

type props = {
  children: ReactNode;
};

export default function ReactQueryProvider({ children }: props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions,
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
