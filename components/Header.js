import Link from "next/link";
import Image from "next/image";

export default function Header({ titulo }) {
  return (
    <header className="flex flex-1 flex-row container ">
      <div className="flex w-full">
        <div className="flex flex-1 justify-center md:justify-end mx-10">
          <Link href="/">
            <a>
              <Image
                src="/sw-dark.png"
                alt="Logo Star Wars"
                width={100}
                height={100}
                className="object-contain"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-1 justify-start items-center">
          <h1 className="font-bold text-white text-2xl">{titulo}</h1>
        </div>
      </div>
    </header>
  );
}
