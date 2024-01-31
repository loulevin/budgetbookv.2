import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

const categories = [
  { value: "einnahmen", label: "Einnahmen" },
  { value: "fixkosten", label: "Fixkosten" },
  { value: "lebensmittel", label: "Lebensmittel" },
  { value: "hygiene", label: "Hygiene" },
  { value: "kleidung", label: "Kleidung" },
  { value: "zigaretten", label: "Zigaretten" },
  { value: "stadtbesorgungen", label: "Stadtbesorgungen" },
  { value: "auswärtsessen", label: "Auswärts essen" },
  { value: "online", label: "Online" },
  { value: "sparen", label: "Sparen" },
];

export const PageBudgetRegister = () => {
  const [budget, setBudget] = useState<any>(null);

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (budget !== null) {
      (async () => {
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        try {
          const response = await axios.post(
            "http://localhost:3820/budgetbook",
            budget,
            { headers }
          );
          if (response.status >= 200 && response.status < 300) {
            console.log(`FEHLER: ${response.status}`);
          }
        } catch (error: any) {
          console.log(`ERROR: ${error.message}`);
        }
      })();
    }
  }, [budget]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newBudget = JSON.stringify(Object.fromEntries(formData.entries()));
    setBudget(newBudget);
  };

  return (
    <>
      <div className="ml-[20%] mr-[20%]">
        <form id="budgetForm" onSubmit={handleSubmit} className="mt-20">
          <fieldset className="border border-color-primary-dark w-[30rem] rounded bg-color-accent-dark">
            <legend className="ml-2 text-color-text-light rounded bg-color-bg-dark px-3 ">
              Neuer Eintrag
            </legend>

            <div className="m-2 flex text-colo">
              <label
                className="w-1/3 text-color-text-light"
                htmlFor="bookingnr"
              >
                Buchungs-Nr.:
              </label>
              <input
                type="number"
                name="bookingnr"
                id="bookingnr"
                className="w-12"
              />
            </div>

            <div className="m-2 flex">
              <label htmlFor="" className="w-1/3 text-color-text-light">
                Datum:
              </label>
              <input type="date" name="date" defaultValue={currentDate} />
            </div>

            <div className="m-2 flex">
              <label htmlFor="category" className="w-1/3 text-color-text-light">
                Katgorie:
              </label>
              <select name="category" id="category" className="w-2/3">
                {categories.map((categories) => (
                  <option key={categories.value} value={categories.value}>
                    {categories.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="m-2 flex">
              <label htmlFor="business" className="w-1/3 text-color-text-light">
                Geschäft:
              </label>
              <input
                type="text"
                name="business"
                id="business"
                className="w-2/3"
              />
            </div>

            <div className="m-2 flex">
              <label htmlFor="" className="w-1/3 text-color-text-light">
                Betrag:
              </label>
              <input
                type="text"
                name="amount"
                id="amount"
                className="w-2/3 w-[5rem]"
              />
              <p className="font-bold ml-2">€</p>
            </div>

            <div className="m-2 flex">
              <label htmlFor="notes" className="w-1/3 text-color-text-light">
                Notizen:
              </label>
              <textarea name="notes" id="notes" className="w-2/3"></textarea>
            </div>

            <div className="flex justify-end m-6 ">
              <button
                type="submit"
                className="bg-color-accent-light rounded p-2 text-color-text-dark"
              >
                Eintragen
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
