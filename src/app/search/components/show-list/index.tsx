"use client";

import { Container, SimpleGrid } from "@chakra-ui/react";
import { ShowTile } from "../show-tile";

type ShowTileListProps = {
    media: {
        coverImage: {
            large: string;
        };
        title: {
            romaji: string;
            english: string | null;
        };
        averageScore: number | null;
    }[]
}

export const ShowTileList = ({ media }: ShowTileListProps) => {
    return (
        <SimpleGrid columns={[1, 2, 3, 4, null]} spacing={8}>
            {media.map(({ averageScore, coverImage, title }, index) => (
                <ShowTile
                    key={index}
                    imageUrl={coverImage.large}
                    titleRomaji={title.romaji}
                    titleEnglish={title.english ?? undefined}
                    averageScore={averageScore ?? undefined}
                />
            ))}
        </SimpleGrid>
    );

}