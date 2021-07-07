import { Center, Heading, Text } from "@chakra-ui/react";
import { config } from "../../../config/config";

export const HeaderComponent = () => {
  const { main } = config;

  return (
    <Center>
      <Heading color={main.text} size="xl">
        <Text casing="uppercase">Contact Form</Text>
      </Heading>
    </Center>
  );
};
