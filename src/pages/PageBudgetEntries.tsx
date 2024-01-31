import { BudgetEntries } from "../components/BudgetEntries";
import { BudgetWindow } from "../components/BudgetWindow";

export const PageBudgetEntries: React.FC = () => {
  return (
    <>
      <div className="md:flex md:items-center gap-3 mt-20 mb-20">
        <div className="mb-3">
          <BudgetWindow />
        </div>
        <div>
          <BudgetEntries />
        </div>
      </div>
    </>
  );
};
