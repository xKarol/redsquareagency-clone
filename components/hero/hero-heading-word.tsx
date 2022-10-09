import { FadeInGroupAnimation } from "../../animations/hero";

type Props = {
  index: number;
  children: string;
};

function HeroHeadingWord({ index, children }: Props) {
  return <FadeInGroupAnimation index={index}>{children}&nbsp;</FadeInGroupAnimation>;
}

export default HeroHeadingWord;
