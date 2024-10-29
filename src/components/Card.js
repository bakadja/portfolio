import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      spacing={4}
      bg="white"
      color="black"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="0"
      _hover={{
        borderWidth:"1px",
        borderColor: "gray.600",
      }}
    >
      <VStack align="flex-start" spacing={3}>
        <Image
          src={imageSrc}
          alt={title}
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
          border="none"
        />
        <Heading as="h3" size="md" px={2}>
          {title}
        </Heading>
        <Text color="gray.700" px={2}>
          {description}
        </Text>
        <HStack px={2}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight}  size="1x"/>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
