export type dropdownItem = {
  label: string;
  value: string;
};

type ContractType = "SERVICE" | "FREIGHT" | "RATE";
type TransportMode = "SEA" | "AIR" | "RAIL" | "ROAD";
type ServiceType = "D2D" | "A2A" | "A2D" | "P2P" | "P2D";
export type Status =
  | "NEW"
  | "DRAFT"
  | "PROCESSED"
  | "SUBMITTED"
  | "FAILED"
  | "ACCEPTED";

export interface ContractItem {
  name: string;
  type: ContractType;
  transportMode: TransportMode;
  serviceType: ServiceType;
  startDate: string;
  endDate: string;
  client: string;
  carrier: string;
  origin: string;
  destination: string;
  paymentTerms: string;
  price: string;
  currency: string;
  goodsWeight: string;
  id?: string;
  status?: Status;
}
