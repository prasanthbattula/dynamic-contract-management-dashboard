import { ColumnDef } from "@tanstack/react-table";

import {
  clients,
  contractTypes,
  currencies,
  destinations,
  origins,
  serviceTypes,
  transportModes,
} from "@/constants/constants";
import { Control } from "react-hook-form";
import { ContractItem } from "@/types/types";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Edit, Edit2Icon, EditIcon, Pen } from "lucide-react";

export const getContractFormConfig = ({ control }: { control: Control }) => {
  const list = [
    {
      controlType: "input",
      name: "name",
      label: "Contract Name",
      control,
    },
    {
      controlType: "dropdown",
      name: "type",
      label: "Contract Type",
      control,
      options: contractTypes || [],
    },
    {
      controlType: "date",
      name: "startDate",
      label: "Start Date",
      control,
    },
    {
      controlType: "date",
      name: "endDate",
      label: "End Date",
      control,
    },
    {
      controlType: "dropdown",
      name: "client",
      label: "Client",
      control,
      options: clients || [],
    },
    {
      controlType: "input",
      name: "carrier",
      label: "Carrier",
      control,
      options: [],
    },
    {
      controlType: "dropdown",
      name: "transportMode",
      label: "Transport Mode",
      control,
      options: transportModes || [],
    },
    {
      controlType: "dropdown",
      name: "serviceType",
      label: "Service Type",
      control,
      options: serviceTypes || [],
    },
    {
      controlType: "dropdown",
      name: "origin",
      label: "Origin",
      control,
      options: origins || [],
    },
    {
      controlType: "dropdown",
      name: "destination",
      label: "Destination",
      control,
      options: destinations || [],
    },
    {
      controlType: "input",
      name: "paymentTerms",
      label: "Payment Terms",
      control,
    },
    {
      controlType: "input",
      name: "price",
      label: "Price",
      control,
    },
    {
      controlType: "dropdown",
      name: "currency",
      label: "Currency",
      control,
      options: currencies || [],
    },
    {
      controlType: "input",
      name: "goodsWeight",
      label: "Goods Weight",
      control,
    },
    // {
    //   controlType: "checkbox",
    //   name: "dangerous",
    //   label: "Dangerous Goods",
    //   control,
    // },
  ];
  return list;
};

export const getColumns = ({ onEdit }: any) => {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Contract Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Contract Type
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            End Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "client",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Client
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "carrier",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Carrier
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "transportMode",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Transport Mode
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "serviceType",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Service Type
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "origin",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            origin
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "destination",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Destination
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "paymentTerms",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Payment Terms
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "currency",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Currency
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "goodsWeight",
      header: "Goods Weight",
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: (props: any) => {
        const {
          row: {
            original: { id },
          },
        } = props;
        return (
          <div
            className="cursor-pointer"
            onClick={() => {
              onEdit(id);
            }}
          >
            <EditIcon size={14} />
          </div>
        );
      },
    },
  ];
};
