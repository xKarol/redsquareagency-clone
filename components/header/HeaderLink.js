import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

function HeaderLink() {
  const router = useRouter();
  return (
    <Link href={router.pathname === "/" ? "/work" : "/"} passHref>
      <StyledLink className="hover-blur">
        Work <BiChevronRight />
      </StyledLink>
    </Link>
  );
}

export default HeaderLink;
