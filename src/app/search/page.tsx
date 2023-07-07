"use client";

import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";
import { Container, Text } from "@chakra-ui/react";
import { Step } from "@/components/stepper";
import { useEffect } from "react";

const steps: Step[] = [
  { title: 'Set username' },
  { title: 'Choose job title' },
];

const SearchResultsPage = () => {
  const { status, data: sessionData, update: updateSession } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") redirect("/")
  }, [status])

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  return (
    <Container maxW="container.xl" py={12}>
      <Text>Session</Text>
      {sessionData?.user ? Object.entries(sessionData?.user).map(([key, value]) => (
        <Text key={key}>{key}: {value}</Text>
      )) : <Text>No user session</Text>}
    </Container>
  );
}

export default SearchResultsPage;