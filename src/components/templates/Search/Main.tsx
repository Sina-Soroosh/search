"use client";

import Poem from "@/components/modules/Poem";
import data from "@/data/data";
import React, { useEffect, useRef, useState } from "react";

type FullPorts = {
  [property in string]: { [property in number]: string[] };
};

function Main() {
  const searchInputRef = useRef<null | HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [poems, setPoems] = useState<string[]>([]);

  useEffect(() => {
    if (!search) {
      setPoems([]);
    } else {
      let fullParts: FullPorts = {};

      for (const key in data) {
        fullParts[key] = data[key].parts;
      }

      let fullPoems: string[] = [];

      for (const key in fullParts) {
        const part = { ...fullParts[key] };

        for (const keyOfPart in part) {
          fullPoems = [...fullPoems, ...part[keyOfPart]];
        }
      }

      const activePoems = fullPoems.filter((poem) => poem.includes(search));

      setPoems(activePoems);
    }
  }, [search]);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchInputRef.current) {
      return;
    }

    setSearch(searchInputRef.current.value.trim());
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form
          className="flex flex-wrap justify-center gap-2"
          onSubmit={searchHandler}
        >
          <input
            type="text"
            placeholder="جستجو ..."
            className="border border-gray-400 py-2 px-1 rounded-md"
            ref={searchInputRef}
          />
          <button className="bg-green-700 text-white px-2 py-2 rounded-md hover:bg-green-800 transition-colors">
            جستجو
          </button>
        </form>
        {search ? (
          <div className="text-center">
            <p className="my-1 text-lg text-center text-red-700">
              جستجو برای کلمه : {search}{" "}
            </p>
            <button
              onClick={() => setSearch("")}
              className="bg-red-700 text-white px-2 py-2 rounded-md hover:bg-red-800 transition-colors"
            >
              حذف جستجو
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-1 gap-1 text-center my-3">
          {poems.map((text, index) => (
            <Poem search={search} text={text} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
