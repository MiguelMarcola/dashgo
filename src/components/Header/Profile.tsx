import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Miguel Marçola</Text>
                <Text color="gray.300" fontSize="small">
                    miguelmarcola@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Miguel Marçola" src="https://github.com/MiguelMarcola.png" />
        </Flex>
    );
}