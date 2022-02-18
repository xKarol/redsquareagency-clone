import {
  StyledClientsSection,
  StyledClientsHeading,
  StyledClientsList,
} from "./styles";
import clients from "./data.json";
import Client from "./client";

function ClientsSection() {
  return (
    <StyledClientsSection>
      <StyledClientsHeading>Select Clients</StyledClientsHeading>
      <StyledClientsList>
        {clients.map((client) => (
          <Client key={client.id} name={client.name} />
        ))}
      </StyledClientsList>
    </StyledClientsSection>
  );
}

export default ClientsSection;
