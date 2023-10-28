import { usePathname } from "next/navigation";

function useStep() {
  const pathname = usePathname();
  return Number(pathname.split("/").at(-1));
}

export default useStep;
