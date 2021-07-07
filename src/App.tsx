import { Flex } from "@chakra-ui/react";

import "./App.css";
import { HeaderComponent } from "./components/layout/Header/Header";
import { InfoComponent } from "./components/layout/Info/InfoComponent";
import { MainComponent } from "./components/layout/Main/Main";
import { config } from "./config/config";

function App() {
  const { main } = config;

  return (
    <Flex p="9" bg={main.bg} w="100%" h="100vh" flexDirection="column">
      <HeaderComponent></HeaderComponent>
      <Flex flexDirection="row" display="inline-flex">
        <MainComponent></MainComponent>
        <InfoComponent></InfoComponent>
      </Flex>
    </Flex>
  );
}

export default App;
