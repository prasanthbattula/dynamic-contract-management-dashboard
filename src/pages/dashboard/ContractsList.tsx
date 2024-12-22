import { useContext, useMemo, useState } from "react";
import { getColumns } from "./config/contractConfig";
import ContractContext from "@/context/contractContext";
import { DataTable } from "@/components/ui/data-table";
import ContractsAddorEditForm from "./ContractAddorEditForm";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Mode";
import { ContractItem } from "@/types/types";

const ContractsList = () => {
  const { data } = useContext(ContractContext);
  const [openEditPopup, setOpenEditPopup] = useState<boolean>(false);
  const [selectedContract, setSelectedContract] = useState<string>("");

  const onEdit = (id: string) => {
    setSelectedContract(id);
    setOpenEditPopup(true);
  };

  const onEditPopupClose = () => {
    setSelectedContract("");
    setOpenEditPopup(false);
  };

  const onCreate = () => {
    setOpenEditPopup(true);
  };

  const columns = useMemo(() => getColumns({ onEdit }), []);

  return (
    <div>
      <div className="flex flex-row justify-between py-4 w-max gap-4 md:w-full">
        <Button onClick={onCreate}>Genereate New Contract</Button>
        <ModeToggle />
      </div>
      <div className="max">
        <DataTable columns={columns} data={data as ContractItem[]} />
        {openEditPopup && (
          <ContractsAddorEditForm
            open={openEditPopup}
            onClose={onEditPopupClose}
            id={selectedContract}
          />
        )}
      </div>
    </div>
  );
};

export default ContractsList;
