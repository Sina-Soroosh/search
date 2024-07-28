"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { Link } from "react-scroll";

type BookLayoutProps = {
  parts: number[];
};

function BookLayout({ children, parts }: PropsWithChildren<BookLayoutProps>) {
  const router = useRouter();
  const pathname = usePathname();

  const setUrl = (part: number) => {
    router.replace(`${pathname}#part${part}`);
  };

  return (
    <>
      <div className="fixed inset-y-0 bg-green-300 w-[250px] my-0 flex py-5 justify-center">
        <ul>
          {parts.map((part) => (
            <li className="py-2" key={part}>
              <Link
                to={`part${part}`}
                className={`text-xl hover:font-bold transition-all `}
                activeClass="font-bold"
                key={part}
                spy={true}
                smooth={true}
                offset={-150}
                onSetActive={() => setUrl(part)}
                duration={500}
              >
                بخش {part}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pr-[260px]">{children}</div>
    </>
  );
}

export default BookLayout;
