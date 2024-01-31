import db from "../data/db.json";

const budget = db.budgetbook;

export const PageBudgetTabelle = () => {
  const reverseBudget = [...budget.reverse()];
  return (
    <>
      {reverseBudget.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="relative overflow-x-auto mt-4 rounded w-[40rem] mt-20">
            <table className="w-full text-center">
              <thead className="bg-color-bg-dark text-color-text-light">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    B-Nr.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kategorie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Geschäft
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Betrag
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Notizen
                  </th>
                </tr>
              </thead>
              <tbody>
                {reverseBudget.map((budget) => {
                  return (
                    <tr
                      key={budget.id}
                      className="bg-color-primary-light text-color-text-dark"
                    >
                      <td className="px-6 py-3">{budget.bookingnr}</td>
                      <td className="px-6 py-3">{budget.date}</td>
                      <td className="px-6 py-3">{budget.category}</td>
                      <td className="px-6 py-3">{budget.business}</td>
                      <td className="px-6 py-3">{budget.amount} €</td>
                      <td className="px-6 py-3">{budget.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};
