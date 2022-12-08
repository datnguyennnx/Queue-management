import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DataTable from "./modules/datagrid/DataTable";
import BasicTabs from "./modules/Command/ExambleCommand"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <BasicTabs/>
      <DataTable />
    </div>
  </StrictMode>
);
