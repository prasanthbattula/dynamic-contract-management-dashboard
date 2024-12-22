import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Contracts from "@/pages/dashboard";
import "./App.css";

interface AppProps {
  children?: ReactNode;
}

function App({ children }: AppProps): JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Contracts />
      {children}
    </ThemeProvider>
  );
}

export default App;
