import React from "react";
import { Item, Title } from "./utils";
import { ISales } from "@/types";

const Sales: React.FC<{ data: ISales; ifExists: boolean }> = ({
  data,
  ifExists,
}) => {
  return (
    <>
      <div className="nike_container">
        <Title title={data.title} />
        <div
          className={`mt-7 grid items-center justify-items-center gap-7 lg:gap-5 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {data.items?.map((item, index) => {
            return (
              <Item key={`${index}${item.id}`} {...item} ifExists={ifExists} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sales;
