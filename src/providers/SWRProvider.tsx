"use client";

import { SWRConfig } from "swr";

interface Props {
  children: React.ReactNode;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SWRProvider({ children }: Props) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}

export default SWRProvider;
