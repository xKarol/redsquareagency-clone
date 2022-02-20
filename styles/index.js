import styled from "styled-components";

const Shape = styled.a`
  width: 30px;
  height: 30px;

  &.square {
    background-color: ${(props) => props.theme.colors.red};
  }
  &.circle {
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.blue};
  }
  &.triangle {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;

    &:after {
      --a: 30px;
      --border-left: calc(0.866 * var(--a));
      border-bottom: calc(var(--a) / 2) solid transparent;
      border-left: var(--border-left) solid
        ${(props) => props.theme.colors.yellow};
      border-right: 0;
      border-top: calc(var(--a) / 2) solid transparent;
      content: "";
      height: 0;
      /* transform: translateX(calc(0.2887 * var(--border-left) * 0.5)); */
      transform: translateX(4px) translateY(3px) rotate(30deg);
      width: 0;
    }
  }
`;

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.25;
`;

export { Shape, StyledDivider };
