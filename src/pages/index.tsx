import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
    email: string;
    password: string;
}

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm()

    const { errors } = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values)
    }

    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center"
        >
            <Flex
                as="form"
                w="100%"
                maxW={360}
                bg="gray.800"
                p={8}
                flexDir="column"
                gap={4}
                onSubmit={handleSubmit(handleSignIn)}

            >
                <Stack spacing="4">

                    <Input name="email" label="E-mail" type="email" {...register("email")} />

                    <Input name="password" label="Senha" type="password" {...register("password")} />

                </Stack>

                <Button type="submit" mt="4" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
            </Flex>
        </Flex >
    )
}
