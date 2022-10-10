import React from "react";

import type { ClientType } from "../../@types/clients";
import { SlideInAnimation } from "../../animations/clients";
import { Styles } from "../../components/clients-section";

type Props = {
  clients: ClientType[];
};

const ClientsListContainer = ({ clients }: Props) => {
  const half = Math.ceil(clients.length / 2);

  return (
    <Styles.ClientsBox>
      <Styles.List>
        {clients.slice(0, half).map(({ id, name }) => (
          <SlideInAnimation key={id}>
            <Styles.Item as="span">{name}</Styles.Item>
          </SlideInAnimation>
        ))}
      </Styles.List>
      <Styles.List>
        {clients.slice(half, clients.length).map(({ id, name }) => (
          <SlideInAnimation key={id}>
            <Styles.Item as="span">{name}</Styles.Item>
          </SlideInAnimation>
        ))}
      </Styles.List>
    </Styles.ClientsBox>
  );
};

export default ClientsListContainer;
