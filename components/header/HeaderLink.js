import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

function HeaderLink() {
  return (
    <Link href="/" passHref>
      <StyledLink className="hover-blur">
        Work <BiChevronRight />
      </StyledLink>
    </Link>
  );
}

export default HeaderLink;
