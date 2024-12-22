import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { useContext, useEffect, useMemo } from "react";
import { getContractFormConfig } from "./config/contractConfig";
import { FormGenerator } from "@/components/form/FormGenerator";
import ContractContext from "@/context/contractContext";

const ContractsAddorEditForm = ({ id, onClose, open }: any) => {
  const { add, update, getContract, updateState } = useContext(ContractContext);

  const form = useForm({
    mode: "all",
    defaultValues: {},
  });
  const { control, handleSubmit, reset } = form;
  const onSubmit = (e: any) => {
    e?.preventDefault();
    handleSubmit((formData: any) => {
      if (id) {
        update?.({ id, data: formData });
      } else {
        add(formData);
      }
      onClose();
    })();
  };

  const config = useMemo(() => getContractFormConfig({ control }), [control]);

  useEffect(() => {
    const contractData = getContract(id);
    reset(contractData);
    return () => {
      reset({});
    };
  }, [id]);

  return (
    <Dialog
      defaultOpen={open}
      onOpenChange={() => {
        onClose();
      }}
    >
      <DialogContent className="sm:max-w-[70vw]">
        <DialogHeader>
          <DialogTitle>{`${id ? "Update" : "Create"} Contract`}</DialogTitle>
          <DialogDescription>
            Make changes to your contract here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-3 grid-flow-row gap-4 mt-4">
              <FormGenerator configForm={config} />
            </div>
            <div className="flex flex-row justify-between">
              {id && (
                <div className="flex flex-row gap-2">
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      updateState({ id, status: "DRAFT" });
                      onClose();
                    }}
                  >
                    Mark as Draft
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      updateState({ id, status: "PROCESSED" });
                      onClose();
                    }}
                  >
                    Mark as PROCESSED
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      updateState({ id, status: "SUBMITTED" });
                      onClose();
                    }}
                  >
                    Mark as SUBMITTED
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      updateState({ id, status: "ACCEPTED" });
                      onClose();
                    }}
                  >
                    ACCEPT
                  </Button>
                </div>
              )}

              <DialogFooter className="flex flex-row justify-between">
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContractsAddorEditForm;
