import Image from "next/image";
import Link from "next/link";

function BrandMark({ modifyClass = true }: { modifyClass?: boolean }) {
  const desktopStyles =
    "font-Space_Mono text-dark-101 dark:text-white max-sm:hidden";

  const phoneStyles = "txt-dt101_lt901";

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/images/site-logo.svg"
        height={23}
        width={23}
        alt="next overflow"
      />
      <p
        className={`heading2-bold ${modifyClass ? desktopStyles : phoneStyles}`}
      >
        Next <span className="text-primary-501">Overflow</span>
      </p>
    </Link>
  );
}

export default BrandMark;
