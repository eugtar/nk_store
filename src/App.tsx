import React from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
import { toprateslaes, popularsales, sneaker, highlight } from "./data";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="relative flex flex-col gap-16">
        <Hero />
        <Sales data={popularsales} ifExists={true} />
        <FlexContent data={highlight} ifExists={true} />
        <Sales data={toprateslaes} ifExists={false} />
        <FlexContent data={sneaker} ifExists={false} />
        <Stories />
        <Footer />
      </main>
    </>
  );
};

export default App;
