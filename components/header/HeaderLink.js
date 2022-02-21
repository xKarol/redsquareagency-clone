import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

function HeaderLink() {
  const { pathname } = useRouter();
  return (
    <Link href={pathname === "/" ? "/work" : "/"} passHref>
      <StyledLink className="bg-hover-blur">
        <span>{pathname === "/" ? "Work" : "Red Square"}</span>
        <BiChevronRight />
      </StyledLink>
    </Link>
  );
}

export default HeaderLink;
