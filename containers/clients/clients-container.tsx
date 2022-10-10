import React from "react";

import type { ClientType } from "../../@types/clients";
import { FadeInAnimation } from "../../animations/clients";
import { Styles } from "../../components/clients-section/styles";
import { StyledDivider } from "../../styles";
import ClientsListContainer from "./clients-list";

type Props = {
  clients: ClientType[];
};

const ClientsContainer = ({ clients = [] }: Props) => {
  return (
    <Styles.Container className="container">
      <StyledDivider />
      <Styles.Section>
        <FadeInAnimation>
          <Styles.Heading>Select Clients</Styles.Heading>
        </FadeInAnimation>
        <ClientsListContainer clients={clients} />
      </Styles.Section>
      <StyledDivider />
    </Styles.Container>
  );
};

export default ClientsContainer;
