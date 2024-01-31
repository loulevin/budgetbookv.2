import db from "../data/db.json";
import { IBudget } from "../interface";

const budget: IBudget[] = db.budgetbook;

export const BudgetEntries = () => {
  const reverseBudget = [...budget.reverse()];
  let previousDate: string | null = null;

  return (
    <>
      {reverseBudget.map((budgetItem) => {
        const currentDate = new Date(budgetItem.date);

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const formattedDate = `${day < 10 ? "0" : ""}${day}.${
          month < 10 ? "0" : ""
        }${month}.${year}`;

        const showDate = formattedDate !== previousDate;
        if (showDate) {
          previousDate = formattedDate;
          return (
            <div key={formattedDate}>
              <p className="bg-color-primary-dark rounded p-2 text-sm ">
                {formattedDate}
              </p>
              <div className="flex justify-around m-4 gap-4 rounded bg-color-accent-light w-[20rem] md:w-[25rem] lg:w-[30rem]">
                <div className="flex justify-center items-center p-3 w-1/3">
                  <p>{budgetItem.category}</p>
                </div>
                <div className="w-1/3">
                  <p>{budgetItem.business}</p>
                  <p>{budgetItem.notes}</p>
                </div>
                <div className="flex justify-center items-center w-1/3">
                  <p>{budgetItem.amount} €</p>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            key={formattedDate}
            className="flex justify-around m-4 rounded bg-color-accent-light gap-4 w-[20rem] md:w-[25rem] lg:w-[30rem]"
          >
            <div></div>
            <div className="flex justify-center items-center p-3 w-1/3">
              <p>{budgetItem.category}</p>
            </div>
            <div className="w-1/3">
              <p>{budgetItem.business}</p>
              <p>{budgetItem.notes}</p>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <p>{budgetItem.amount} €</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
