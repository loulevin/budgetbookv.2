import { useEffect, useState } from "react";
import db from "../data/db.json";
import { IBudget } from "../interface";

const months = [
  { value: "01", label: "Januar" },
  { value: "02", label: "Februar" },
  { value: "03", label: "März" },
  { value: "04", label: "April" },
  { value: "05", label: "Mai" },
  { value: "06", label: "Juni" },
  { value: "07", label: "Juli" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Dezember" },
];

export const BudgetWindow = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const newTotalIncome = db.budgetbook
      .filter((budgetItem: IBudget) => budgetItem.category === "einnahmen")
      .reduce((total, budgetItem) => total + parseFloat(budgetItem.amount), 0);

    setTotalIncome(newTotalIncome);
  }, [selectedMonth]);

  const handleMonthChange = (e: any) => {
    setSelectedMonth(e.target.value);
  };

  const getCurrentMonth = () => {
    const CurrentDate = new Date();
    const CurrentMonth = CurrentDate.getMonth() + 1;
    return CurrentMonth < 10 ? `0${CurrentMonth}` : `${CurrentMonth}`;
  };

  useEffect(() => {
    setSelectedMonth(getCurrentMonth());
  }, []);

  return (
    <>
      <div className="flex gap-2 border-color-primary-dark border-2 rounded-xl bg-color-accent-dark text-color-text-light">
        <div className="m-3">
          <label htmlFor="months" className="font-bold mr-3 w-3/4">
            Monat:
          </label>
          <select
            name="months"
            id="months"
            onChange={handleMonthChange}
            value="{selectedMonth}"
            className="text-color-text-dark w-3/4"
          >
            {months.map((months) => (
              <option key={months.value} value={months.value}>
                {months.label}
              </option>
            ))}
          </select>
          <div className="flex gap-4">
            <p className="w-3/4">Gesamtbudget: </p>
            <p className="w-1/4">{totalIncome} €</p>
          </div>
        </div>
      </div>
    </>
  );
};
