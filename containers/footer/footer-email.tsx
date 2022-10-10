import Tilt from "react-parallax-tilt";

import { Styles } from "../../components/footer";

const FooterEmailContainer = () => {
  return (
    <Styles.Email href="mailto:hi@mail.com" className="bg-hover-blur bg-hover-blur__email">
      <Tilt transitionSpeed={2000} tiltReverse={true} tiltMaxAngleY={10}>
        <Styles.EmailHeading>Let&apos;s talk.</Styles.EmailHeading>
        <span className="email">hi@mail.com</span>
      </Tilt>
    </Styles.Email>
  );
};

export default FooterEmailContainer;
