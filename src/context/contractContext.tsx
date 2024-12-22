/* eslint-disable @typescript-eslint/no-explicit-any */
import { initialContracts } from "@/constants/constants";
import { ContractItem, Status } from "@/types/types";
import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ContractContextProps {
  data: ContractItem[] | undefined;
  add: (data: ContractItem) => void;
  update: ({ id, data }: { id: string; data: ContractItem }) => void;
  remove: (id: string) => void;
  getContract: (id: string) => any;
  updateState: ({ id, status }: { id: string; status: Status }) => void;
}

// Create the context
const ContractContext = createContext<ContractContextProps>({
  data: undefined,
  add: () => {},
  update: () => {},
  remove: () => {},
  getContract: () => {},
  updateState: () => {},
});

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Array<ContractItem>>(initialContracts);

  // Add an object to the array
  const add = (data: ContractItem) => {
    setData((prevData: ContractItem[]) => [
      ...prevData,
      { ...data, id: uuidv4(), status: "NEW" },
    ]);
  };

  // Update an object in the array
  const update = ({ id, data }: { id: string; data: ContractItem }) => {
    setData((prevData: ContractItem[]) =>
      prevData.map((obj: ContractItem) =>
        obj.id === id ? { ...obj, ...data } : obj
      )
    );
  };

  // Delete an object from the array
  const remove = (id: string) => {
    setData((prevData: ContractItem[]) =>
      prevData.filter((obj: ContractItem) => obj.id !== id)
    );
  };

  // get data by id
  const getContract = (id: string) => {
    return data?.find((obj: ContractItem) => obj?.id === id);
  };

  // Update an object in the array
  const updateState = ({ id, status }: { id: string; status: Status }) => {
    setData((prevData: ContractItem[]) =>
      prevData.map((obj: ContractItem) =>
        obj.id === id ? { ...obj, status } : obj
      )
    );
  };

  return (
    <ContractContext.Provider
      value={{ data, add, update, remove, getContract, updateState }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
