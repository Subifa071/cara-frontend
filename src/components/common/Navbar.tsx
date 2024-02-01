import { useAuthContext } from "@/contexts/AuthContext";
import { Button, ButtonGroup, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { push } = useRouter();
  const { user, logout, setToken, setUser } = useAuthContext();
  return (
    <Flex
      h={14}
      width={"100vw"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={10}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      top={0}
    >
      <Heading
        size={"lg"}
        userSelect={"none"}
        onClick={() => push("/")}
        cursor={"pointer"}
      >
        Cara Beauty
      </Heading>
      <Flex alignItems={"center"} gap={5}>
        {user?.firstName && (
          <Text fontWeight={"bold"} fontSize={20}>
            Welcome back, {user.firstName}!
          </Text>
        )}
        <ButtonGroup>
          <Button onClick={() => push("/users/login")}>Your Cart (0)</Button>
          {!user ? (
            <Button onClick={() => push("/users/login")}>Login</Button>
          ) : (
            <>
              <Button onClick={() => push("/users/profile")}>Profile</Button>
              <Button onClick={() => logout()}>Logout</Button>
              <></>
            </>
          )}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
