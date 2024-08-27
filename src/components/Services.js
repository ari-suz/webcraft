import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue
} from "@nextui-org/table";
import "../css/table.css";

const Services = () => {
  const rows = [
    {
      key: "0",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "1",
      size: "4x10",
      area: "40 sq. ft.",
      price: "$4,037",
    },
    {
      key: "2",
      size: "4x12",
      area: "48 sq. ft.",
      price: "$4,367",
    },
    {
      key: "3",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "4",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "5",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "6",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "7",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
    {
      key: "8",
      size: "4x8",
      area: "32 sq. ft.",
      price: "$3,288",
    },
  ];
  
  const columns = [
    {
      key: "size",
      label: "Shed Size",
    },
    {
      key: "area",
      label: "Area",
    },
    {
      key: "price",
      label: "Base Price",
    },
  ];
  return (
    <div className="pricing-table">
      <div className="pricing-header">
        <p>Below we have provided a pricing chart to give an idea of a starting price.</p>
      </div>
      <Table aria-label="Pricing table">
        <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="pricing-header">
        <h2>Included Features</h2>
      </div>
    </div>
  );
};

export default Services;