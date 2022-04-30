import { 
  Input as ChakraInput, 
  FormLabel, 
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  InputGroup
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <InputGroup>
          <ChakraInput
            id={name}
            name={name} 
            borderColor={error ? "red.600" : "gray.600"}
            focusBorderColor={error ? "red.600" : "purple.900"}
            variant="filled"
            bgColor="white"
            borderRadius="10"
            size="lg"
            ref={ref}
            {...rest}
          />
        </InputGroup>

        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase);