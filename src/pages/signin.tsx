import { Flex, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../Form/Input";
import { Header } from "../Header";

interface DataFormSignIn {
  email: string;
  password: string;
}

const createSignInFormSchema = yup.object().shape({
  email: yup.string().email("Digite um e-mail válido").required("E-mail Obrigatório"),
  password: yup.string().required("Senha Obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<DataFormSignIn>({
    resolver: yupResolver(createSignInFormSchema)
  });

  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<DataFormSignIn> = async (data) => {
    console.log(data)
  }

  return (
    <>
    <Header />
    <Flex
      as="header"
      w="100%"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        w="100%"
        justify="flex-end"
        align="center"
        maxW={700}
        h={600}
        border="2px solid black"
        borderRadius="15"
        boxShadow="dark-lg"
      >
        <Box
          as="form"
          flex="1"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Heading
            size="lg"
            fontWeight="bold"
            textAlign="center"
          >
            Faça seu login na plataforma
          </Heading>

          <VStack spacing="3" w="100%">
            <Input
              label="E-mail:"
              type="email"
              error={errors.email}
              {...register("email")}
            />

            <Input
              label="Senha:"
              type="password"
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <Flex mt="8" justify="center">
            <Button
              type="submit"
              bgColor="black"
              color="white"
              fontSize="1.5em"
              borderRadius="10"
              _hover={{
                filter: "brightness(0.9)",
              }}
              isLoading={isSubmitting}
              w={["100%", "100%", "100%", "400px"]}
              h="60px"
            >
              Entrar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </>
  )
}
