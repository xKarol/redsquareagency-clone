import type { ClientType } from "../../@types/clients";
import { StyledDivider } from "../../styles";
import Client from "./client";
import Heading from "./heading";
import { Box, Container, StyledClientsList, StyledClientsSection } from "./styles";

type Props = {
  clients: ClientType[];
};

function ClientsSection({ clients = [] }: Props) {
  const half = Math.ceil(clients.length / 2);

  return (
    <StyledClientsSection className="container">
      <StyledDivider />
      <Container>
        <Heading />
        <StyledClientsList>
          <Box>
            {clients.slice(0, half).map((client) => (
              <Client key={client.id} name={client.name} />
            ))}
          </Box>
          <Box>
            {clients.slice(half, clients.length).map((client) => (
              <Client key={client.id} name={client.name} />
            ))}
          </Box>
        </StyledClientsList>
      </Container>
      <StyledDivider />
    </StyledClientsSection>
  );
}

export default ClientsSection;
