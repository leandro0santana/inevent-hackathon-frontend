import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";

import { Event } from "../components/Event";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Flex
        as="header"
        w="100%"
        justify="center"
        align="center"
      >
        <Flex
          w="100%"
          justify="flex-end"
          align="center"
          maxW={1200}
          my="28"
        >

          <SimpleGrid
            flex="1"
            gap="8"
            minChildWidth="320px"
            mt="6"
          >
            <Event />

            <Event />

            <Event />

            <Event />

            <Event />

            <Event />

            <Event />

            <Event />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
