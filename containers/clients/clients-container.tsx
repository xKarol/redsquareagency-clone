import React from "react";

import type { ClientType } from "../../@types/clients";
import { FadeInAnimation } from "../../animations/clients";
import {
  Container,
  StyledClientsHeading,
  StyledClientsSection,
} from "../../components/clients-section/styles";
import { StyledDivider } from "../../styles";
import ClientsListContainer from "./clients-list";

type Props = {
  clients: ClientType[];
};

const ClientsContainer = ({ clients = [] }: Props) => {
  return (
    <StyledClientsSection className="container">
      <StyledDivider />
      <Container>
        <FadeInAnimation>
          <StyledClientsHeading>Select Clients</StyledClientsHeading>
        </FadeInAnimation>
        <ClientsListContainer clients={clients} />
      </Container>
      <StyledDivider />
    </StyledClientsSection>
  );
};

export default ClientsContainer;
