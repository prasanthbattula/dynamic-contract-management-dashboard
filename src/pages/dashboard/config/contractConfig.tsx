import { Control } from "react-hook-form";

const statusOpts = [
  {
    label: "New",
    value: "NEW",
  },
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Draft",
    value: "DRAFT",
  },
  {
    label: "Success",
    value: "SUCCESS",
  },
];
export const getContractConfig = ({ control }: { control: Control }) => {
  const list = [
    {
      controlType: "input",
      name: "name",
      label: "Name",
      control,
    },
    {
      controlType: "dropdown",
      name: "status",
      label: "Status",
      control,
      options: statusOpts || [],
    },
  ];
  return list;
};
