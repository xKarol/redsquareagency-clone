import {
  StyledClientsSection,
  StyledClientsList,
  Container,
  Box,
} from "./styles";
import Client from "./client";
import Divider from "../divider";
import Heading from "./heading";

function ClientsSection({ clients = [] }) {
  const half = Math.ceil(clients.length / 2);

  return (
    <StyledClientsSection className="container">
      <Divider />
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
      <Divider />
    </StyledClientsSection>
  );
}

export default ClientsSection;
