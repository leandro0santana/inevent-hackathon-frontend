import { Flex, Box } from "@chakra-ui/react";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
      <Flex
        as="header"
        w="100%"
        h={90}
        bg="black"
        justify="center"
        align="center"
        position="fixed"
        zIndex="9"
      >
        <Flex
          w="100%"
          justify="flex-end"
          align="center"
          maxW={1440}
        >
        <Box>
          <HeaderNav />
        </Box>
      </Flex>
    </Flex>
  )
}