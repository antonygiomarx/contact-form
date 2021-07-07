import {
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { config } from "../../../config/config";

export const InfoComponent = () => {
  const { main } = config;

  return (
    <Flex mt="100px" ml="190px" flexDirection="column">
      <Heading>
        <Text
          casing="uppercase"
          color={main.text}
          fontWeight="light"
          fontSize="3xl"
          w="350px"
        >
          You Can Find Us Here
        </Text>
      </Heading>
      <Text
        casing="uppercase"
        color={main.text}
        fontWeight="light"
        fontSize="sm"
      >
        Sample Address, Sample Street. 123/45 <br />{" "}
        <Link textDecoration="none" color={main.textSecondary}>
          or on maps
        </Link>
      </Text>
      <UnorderedList mt="15px">
        <ListItem color={main.text}>
          <Text color={main.textTertiary}>+3 (000) 0123 3210</Text>
        </ListItem>
        <ListItem color={main.text}>
          <Text color={main.textTertiary}>+3 (000) 0123 3210</Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
