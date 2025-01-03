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
import { Button } from "@/components/ui/button";
import { ArrowUpDown, EditIcon } from "lucide-react";
import { Column, Row } from "@tanstack/react-table";
import { ContractItem } from "@/types/types";

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
  ];
  return list;
};

interface GetColumnProps {
  onEdit: (id: string) => void;
}

export const getColumns = ({ onEdit }: GetColumnProps) => {
  return [
    {
      accessorKey: "name",
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      cell: ({ row: { original } }: { row: Row<ContractItem> }) => {
        const { id = "", name = "" } = original;
        return (
          <span
            className="cursor-pointer font-bold"
            onClick={() => {
              onEdit(id);
            }}
          >
            {name}
          </span>
        );
      },
    },

    {
      accessorKey: "type",
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      accessorKey: "client",
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
      header: ({ column }: { column: Column<ContractItem, unknown> }) => {
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
