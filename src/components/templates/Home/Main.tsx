import data from "@/data/data";
import Link from "next/link";
import React from "react";

function Main() {
  return (
    <>
      <div className="container mx-auto py-3">
        <h1 className="text-center text-black font-bold text-2xl">
          مثنوی و معنوی مولانا
        </h1>
        <Link
          href="/search"
          className=" my-4 block bg-green-300 w-fit mx-auto py-2 px-3 rounded-md hover:bg-green-400 transition-colors"
        >
          جستجو بین بیت ها
        </Link>
        <div className="grid grid-cols-3 my-5 gap-2">
          {Object.entries(data).map((book) => (
            <Link
              href={`/book/${book[1].id}`}
              key={book[1].id}
              className="py-2 px-3 flex items-center justify-center bg-green-300 rounded-md hover:bg-green-400 transition-colors"
            >
              <p>{book[1].title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
