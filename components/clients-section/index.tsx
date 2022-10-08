import {
  StyledClientsSection,
  StyledClientsList,
  Container,
  Box,
} from "./styles";
import Client from "./client";
import { StyledDivider } from "../../styles";
import Heading from "./heading";

function ClientsSection({ clients = [] }: any) {
  const half = Math.ceil(clients.length / 2);

  return (
    <StyledClientsSection className="container">
      <StyledDivider />
      <Container>
        <Heading />
        <StyledClientsList>
          <Box>
            {clients.slice(0, half).map((client: any) => (
              <Client key={client.id} name={client.name} />
            ))}
          </Box>
          <Box>
            {clients.slice(half, clients.length).map((client: any) => (
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
