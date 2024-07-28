import React from "react";

type PoemProps = {
  search: string;
  text: string;
};

function Poem({ search, text }: PoemProps) {
  let newText = text;

  if (search) {
    newText = text.replaceAll(search, `<span class="active">${search}</span>`);
  }

  return (
    <>
      <hr />
      <p
        className="text-black font-bold text-lg"
        dangerouslySetInnerHTML={{ __html: newText }}
      ></p>
    </>
  );
}

export default Poem;
