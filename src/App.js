import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./../assets/theme";
import {
  ThemeEditorProvider,
  ThemeEditorDrawerButton
} from "@hypertheme-editor/chakra-ui";

import Hero from "./Hero";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <Hero />
        <ThemeEditorDrawerButton pos="fixed" bottom={4} right={2} />
      </ThemeEditorProvider>
    </ChakraProvider>
  );
}

export default App;
