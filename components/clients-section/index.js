import {
  StyledClientsSection,
  StyledClientsHeading,
  StyledClientsList,
  Container,
  Box,
} from "./styles";
import clients from "./data.json";
import Client from "./client";
import Divider from "../divider";

function ClientsSection() {
  const half = Math.ceil(clients.length / 2);

  return (
    <StyledClientsSection className="spacing">
      <Divider />
      <Container>
        <StyledClientsHeading>Select Clients</StyledClientsHeading>
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
