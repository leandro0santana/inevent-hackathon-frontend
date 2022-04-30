import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function HeaderNav() {
  return (
    <Stack spacing="6" direction="row">
      <NavLink href="/signin" >Entrar</NavLink>
      <NavLink href="/register">Criar Conta</NavLink>
    </Stack>
  )
}