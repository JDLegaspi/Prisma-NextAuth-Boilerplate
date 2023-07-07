"use client";

import { SearchFilter } from "@/app/search/components/search-filter";
import { ShowTileList } from "@/app/search/components/show-list";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Container } from "@chakra-ui/react";
import { useState } from "react";

const query = gql`query Page($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
        lastPage
        perPage
        total
      }
      media(search: $search, sort: $sort, isAdult: false) {
        coverImage {
          large
        }
        coverImage {
          color
        }
        popularity
        averageScore
        title {
          romaji
          english
        }
      }
    }
  }`;


const useGetData = (sort: string, search?: string) => {
  const { data } = useSuspenseQuery(query, {
    variables: {
      page: 1,
      perPage: 100,
      search,
      sort,
    }
  });

  return data
}

export const SearchResults = () => {
  const [search, setSearch] = useState<string>();
  const [sort, setSort] = useState<string>("POPULARITY_DESC");

  const data = useGetData(sort, search || undefined);

  // TODO: add types to useGetData
  const { media } = (data as any).Page;

  return (
    <Container maxW="container.xl" py={12}>
      <SearchFilter
        onSearch={(search) => {
          setSearch(search)
        }}
        onSortChange={(sort) => setSort(sort)}
      />
      <ShowTileList media={media} />
    </Container>
  );
}