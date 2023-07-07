"use client";

import { VStack, HStack, Badge, Image, Box, Text } from "@chakra-ui/react"

type ShowTileProps = {
    imageUrl: string;
    titleRomaji: string;
    titleEnglish?: string;
    averageScore?: number;
};

export const ShowTile = ({ imageUrl, titleEnglish, titleRomaji, averageScore }: ShowTileProps) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
                src={imageUrl}
                alt={`${titleEnglish || titleRomaji} banner`}
                height={350}
                width="100%"
                objectFit="cover"
            />
            <VStack p={4} align="start">
                <HStack spacing={4}>
                    <Badge borderRadius="full" colorScheme="teal" px={3}>
                        Score: {averageScore || 'N/A'}
                    </Badge>
                    {/* <Badge borderRadius="full" colorScheme="purple" px={3}>
                  Popularity: {movie.popularity}
                </Badge> */}
                </HStack>
                <Text fontWeight="bold" fontSize="xl">
                    {titleEnglish || titleRomaji || '-'}
                </Text>
                <Text fontWeight="semibold" fontSize="md" color="gray.600">
                    Romaji: {titleRomaji || '-'}
                </Text>
                {titleEnglish && (
                    <Text fontWeight="semibold" fontSize="md" color="gray.600">
                        English: {titleEnglish}
                    </Text>
                )}
            </VStack>
        </Box>
    );
}