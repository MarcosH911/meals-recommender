import SWRProvider from "./SWRProvider";
import ToasterProvider from "./ToasterProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <SWRProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <ToasterProvider />
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </SWRProvider>
  );
}

export default Providers;
