import Link from "next/link";

import { SlideOutAnimation } from "../../animations/footer";
import { Styles } from "../../components/footer";
import { HeaderNavigationButton } from "../../components/header";
import { ROUTE_WORK } from "../../constants/routes";

const FooterAllProjectsContainer = () => {
  return (
    <Styles.AllProjectsContainer>
      <SlideOutAnimation>
        <Link href={ROUTE_WORK} passHref scroll={false}>
          <Styles.AllProjectsBox>
            <Styles.AllProjectsBlur>
              <Styles.AllProjectsText>
                <span>All Projects</span>
                <HeaderNavigationButton>Work</HeaderNavigationButton>
              </Styles.AllProjectsText>
            </Styles.AllProjectsBlur>
          </Styles.AllProjectsBox>
        </Link>
      </SlideOutAnimation>
    </Styles.AllProjectsContainer>
  );
};

export default FooterAllProjectsContainer;
