import Link from "next/link";
import React from "react";

type Props = { link: string; text: string };

export default function NavItems({ link, text }: Props) {
  return (
    <div>
      <nav>
        <ul>
          <li className="hover:text-[#FF1616]">
            <Link href={link}>{text}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
