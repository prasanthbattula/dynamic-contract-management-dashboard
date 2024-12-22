import { useContext, useMemo, useState } from "react";
import { getColumns } from "./config/contractConfig";
import ContractContext from "@/context/contractContext";
import { DataTable } from "@/components/ui/data-table";
import ContractsAddorEditForm from "./ContractAddorEditForm";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Mode";

const ContractsList = () => {
  const { data } = useContext(ContractContext);
  const [openEditPopup, setOpenEditPopup] = useState<boolean>(false);
  const [selectedContract, setSelectedContract] = useState<string>("");

  const onEdit = (id: string) => {
    setSelectedContract(id);
    setOpenEditPopup(true);
  };

  const onEditPopupClose = () => {
    setSelectedContract(null);
    setOpenEditPopup(false);
  };

  const onCreate = () => {
    setOpenEditPopup(true);
  };

  const columns = useMemo(() => getColumns({ onEdit }), []);
  return (
    <div className="max">
      <div className="flex flex-row justify-between py-4">
        <Button onClick={onCreate}>Genereate New Contract</Button>
        <ModeToggle />
      </div>
      <DataTable columns={columns} data={data} />
      {openEditPopup && (
        <ContractsAddorEditForm
          open={openEditPopup}
          onClose={onEditPopupClose}
          id={selectedContract}
        />
      )}
    </div>
  );
};

export default ContractsList;
