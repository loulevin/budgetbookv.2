import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <h1 className="text-4xl m-3 absolute left-0 top-0 text-color-text-dark font-mono ">Haushaltsbuch</h1>
      <Nav />
    </>
  );
};
