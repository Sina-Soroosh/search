import React from "react";

type PartProps = {
  id: number;
  poems: string[];
};

function Part({ id, poems }: PartProps) {
  return (
    <>
      <div className={`part${id}`} id={`part${id}`}>
        <div className={`my-5`}>
          <h1 className="font-bold text-2xl my-3">بخش {id}</h1>
          <div className="grid grid-cols-2 gap-1">
            {poems.map((poem, index) => (
              <p className="text-lg text-black" key={index}>
                {poem}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Part;
