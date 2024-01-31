import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageStart } from "./pages/PageStart";
import { PageBudgetRegister } from "./pages/PageBudgetRegister";
import { PageBudgetEntries } from "./pages/PageBudgetEntries";
import { PageBudgetTabelle } from "./pages/PageBudgetTabelle";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageStart />,
      },
      {
        path: "/budgetregister",
        element: <PageBudgetRegister />,
      },
      {
        path: "/budgetentries",
        element: <PageBudgetEntries />,
      },
      {
        path: "/budgettabelle",
        element: <PageBudgetTabelle />,
      },
    ],
  },
]);

export default router;
