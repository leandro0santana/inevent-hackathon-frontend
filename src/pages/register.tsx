import { Flex, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../Form/Input";
import { Header } from "../Header";

interface DataFormRegister {
  nome: string;
  email: string;
  phone:string;
  company: string;
  password: string;
  password_confirmation: string;
}

const createRegisterFormSchema = yup.object().shape({
  nome: yup.string().min(3, "Nome Obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("E-mail Obrigatório"),
  phone: yup.string().min(14, "Celular Obrigatório"),
  company: yup.string().required("Empresa Obrigatória"),
  password: yup.string().min(8, "No mínimo 8 digitos").nullable(),
  password_confirmation: yup.string().oneOf(
    [yup.ref("password"), null],
    "Confirmação incorreta",
  ),
});

export default function Register() {
  const { register, handleSubmit, formState } = useForm<DataFormRegister>({
    resolver: yupResolver(createRegisterFormSchema)
  });

  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<DataFormRegister> = async (data) => {
    console.log(data)
  }

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
        maxW={700}
        border="2px solid black"
        borderRadius="15"
        boxShadow="dark-lg"
        my="28"
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
            p={["6", "8"]}
          >
            Faça seu cadastro e comece a cadastrar seu eventos
          </Heading>

          <VStack spacing="3" w="100%">
            <Input
              label="Nome Completo:"
              type="text"
              error={errors.nome}
              {...register("nome")}
            />

            <Input
              label="E-mail:"
              type="email"
              error={errors.email}
              {...register("email")}
            />

            <Input
              label="Celular:"
              type="text"
              error={errors.phone}
              {...register("phone")}
            />

            <Input
              label="Empresa:"
              type="text"
              error={errors.company}
              {...register("company")}
            />

            <Input
              label="Senha:"
              type="password"
              error={errors.password}
              {...register("password")}
            />

            <Input
              label="Confirme a Senha:"
              type="password"
              error={errors.password_confirmation}
              {...register("password_confirmation")}
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
              Cadastrar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    </>
  )
            
}