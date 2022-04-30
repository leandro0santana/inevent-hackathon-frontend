import { Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  href: string;
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
      <ChakraLink 
        href={href}
        _after={{
          content: `""`,
          display: "block",
          w: 0,
          h: "3px",
          bgColor: "white",
          transition: "width 0.3s",
        }}
        _hover={{
          textDecoration: "none",
          _after: {
            w: "100%",
          }
        }}
        {...rest}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize={["","1.25em"]}
          color="white"
        >
          {children}
        </Text>
      </ChakraLink>
  )
}