import React from "react";

type PoemProps = {
  search: string;
  text: string;
};

function Poem({ search, text }: PoemProps) {
  let newText = text;

  if (search) {
    const specialWord = "[\u064E\u0650\u064F\u064B\u064C\u064D\u0652]";
    const specialPattern = new RegExp(specialWord);
    const isHasSpecialWord = specialPattern.test(search);
    const regex = search
      .split("")
      .reduce((prev, next) => `${prev}${next}${specialWord}?`, "");

    const searchPattern = new RegExp(regex, "g");

    if (isHasSpecialWord) {
      newText = text.replaceAll(
        search,
        (word) => `<span class="active">${word}</span>`
      );
    } else {
      newText = text.replaceAll(
        searchPattern,
        (word) => `<span class="active">${word}</span>`
      );
    }
  }

  return (
    <>
      <hr />
      <div className="grid grid-cols-2 gap-2">
        <p
          className="text-black font-bold text-lg"
          dangerouslySetInnerHTML={{ __html: newText.split("    ")[0] }}
        ></p>
        <p
          className="text-black font-bold text-lg"
          dangerouslySetInnerHTML={{ __html: newText.split("    ")[1] }}
        ></p>
      </div>
    </>
  );
}

export default Poem;
