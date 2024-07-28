import BookLayout from "@/components/layout/BookLayout";
import Part from "@/components/modules/Part";
import data from "@/data/data";
import { redirect } from "next/navigation";
import React from "react";

type BookProps = {
  params: { id: string };
};

function page({ params }: BookProps) {
  const book = Object.entries(data).find((book) => book[1].id === +params.id);

  if (!book) {
    redirect("/");
  }

  const parts = Object.entries(book[1].parts).map((part) => +part[0]);

  return (
    <>
      <BookLayout parts={parts}>
        {Object.entries(book[1].parts).map((part) => (
          <Part id={+part[0]} poems={part[1]} key={part[0]} />
        ))}
      </BookLayout>
    </>
  );
}

export default page;
