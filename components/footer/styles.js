import styled from "styled-components";

const StyledFooter = styled.footer`
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledEmail = styled.a`
  font-size: 35px;
  margin-bottom: 40px;
  > span {
    color: ${(props) => props.theme.colors.red};
  }
`;

const StyledEmailHeading = styled.h4`
  font-family: ${(props) => props.theme.fonts.mainBold};
`;

const StyledSocials = styled.ul`
  display: flex;
  margin-bottom: 25px;
`;

const StyledSocialLink = styled.li`
  font-size: 25px;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const StyledPlaces = styled.ul`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  font-size: 18px;
  > li:not(:last-child) {
    margin-right: 35px;
  }
`;

export {
  StyledFooter,
  StyledEmail,
  StyledEmailHeading,
  StyledSocials,
  StyledSocialLink,
  StyledPlaces,
};
