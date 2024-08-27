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
      service: "Single-page custom site",
      description: "Fully custom, single-page website for your business.",
      rate: "$100/hour (1-2 days, depending on complexity)",
    },
    {
      key: "1",
      service: "Multi-page custom site",
      description: "Fully custom, multi-page website for your business.",
      rate: "$100/hour (2-4 days, depending on complexity)",
    },
    {
      key: "2",
      service: "Website maintenence",
      description: "Receieve 24/7 support for your site, unlimited change requests.",
      rate: "$100/month",
    },
    {
      key: "3",
      service: "Wix website build & training",
      description: "Custom multi-page Wix website plus training session to learn how to maintain your site.",
      rate: "$1200 (website + 2 hour training session)",
    },
  ];
  
  const columns = [
    {
      key: "service",
      label: "Service",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "rate",
      label: "Starting Rate",
    },
  ];
  return (
    <div className="services-table">
      <div className="services-header">
        <h4>The chart below provides an introduciton to the services we offer.</h4>
      </div>
      <Table aria-label="Services table">
        <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
          <TableRow key={item.key} className="row-styling">
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Services;