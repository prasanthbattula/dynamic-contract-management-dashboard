import { ContractProvider } from "@/context/contractContext";
import ContractsList from "./ContractsList";

const Contracts = () => {
  return (
    <ContractProvider>
      <ContractsList />
    </ContractProvider>
  );
};

export default Contracts;
