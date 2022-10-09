import React from "react";

import type { ClientType } from "../../@types/clients";
import { SlideInAnimation } from "../../animations/clients";
import { Box, StyledClientsList } from "../../components/clients-section";

type Props = {
  clients: ClientType[];
};

const ClientsListContainer = ({ clients }: Props) => {
  const half = Math.ceil(clients.length / 2);

  return (
    <StyledClientsList>
      <Box>
        {clients.slice(0, half).map(({ id, name }) => (
          <SlideInAnimation key={id}>{name}</SlideInAnimation>
        ))}
      </Box>
      <Box>
        {clients.slice(half, clients.length).map(({ id, name }) => (
          <SlideInAnimation key={id}>{name}</SlideInAnimation>
        ))}
      </Box>
    </StyledClientsList>
  );
};

export default ClientsListContainer;
