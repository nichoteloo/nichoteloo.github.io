/**
 * @file index.js
 * @author Nicolas C
 * @since 26/05/2022
 * @description Homepage of my portfolio
 */

import NextLink from "next/link";
import Main from "../components/layout/main";
import { SlideIn } from "../components/animated";
import { AiOutlineDownload } from "react-icons/ai";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ExperienceEntry from "../components/expentry";
import Expertise from "../components/tech";
import { Box, Container, Heading, Text, Button, Flex, Image, Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <Main title="Home">
      <Container px={5} pt={16} maxW={{ lg: "container.md", md: "container.md", sm: "container.sm" }}>
        <SlideIn delay={0} time={1} direction="left">
          <Box
            mt={6}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ md: "center" }}
            gap={{ base: 6, md: 8 }}
          >
            <Box flex={1} order={{ base: 2, md: 1 }}>
              <Heading
                as="p"
                fontFamily="monospace"
                fontSize={{ base: "20px", sm: "22px", md: "24px" }}
                fontWeight="700"
                letterSpacing="-0.03em"
                color="gray.100"
                mb={2}
              >
                Hello!
              </Heading>

              <Text
                fontFamily="monospace"
                fontSize={{ base: "14px", md: "15px" }}
                lineHeight="tall"
                color="gray.300"
                textAlign="justify"
              >
                I&apos;m Nicolas. Software engineer based in Indonesia with 4+ years of experience.
                Act as a technologist with numbers of international projects and wide spectrum of SDLC processes.
                Work on several projects related to data engineering and infrastructure.
                Currently working as a Software Engineer DWH Platform at{" "}
                <Link
                  href="https://www.ocbc.com/"
                  isExternal
                  color="blue.400"
                  fontWeight="700"
                  ml={-2}
                  mr={-2}
                  _hover={{ color: "blue.300", textDecoration: "underline" }}
                >
                  OCBC Bank
                </Link>.
              </Text>
            </Box>

            <Box
              flexShrink={0}
              order={{ base: 1, md: 2 }}
              textAlign="center"
              mt={1}
            >
              <Image
                src="/images/myself.jpg"
                alt="Profile Image of Nicolas"
                boxSize="145px"
                objectFit="cover"
                borderRadius="full"
                border="2px solid"
                borderColor="whiteAlpha.800"
                display="inline-block"
                shadow="lg"
              />
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={0.2} time={1} direction="right">
          <Box mt={6}>
            <Heading
              as="h5"
              variant="sectionTitle"
              size={{ base: "md", lg: "lg" }}
              mb={4}
              letterSpacing="tight"
            >
              Expertise
            </Heading>
            <Flex
              gap={{ base: 3, md: 4 }}
              wrap="wrap"
              justify="center"
              align="center"
            >
              <Expertise title="Cloud Native App" color="facebook" />
              <Expertise title="Data Engineering" color="green" />
              <Expertise title="Amazon Web Services" color="orange" />
              <Expertise title="Performance Test" color="red" />
            </Flex>
          </Box>
        </SlideIn>

        <SlideIn delay={0.4} time={1} direction="left">
          <Box mt={8}>
            <Heading as="h5" variant="sectionTitle" size={{ base: "md", lg: "lg" }}>
              Work Experience
            </Heading>

            <ExperienceEntry
              date="04/2026 - Present"
              role="Software Engineer DWH Platform"
              company="OCBC Bank"
              status="Full Time"
              mb={1}
              responsibilities={[
                'Delivered integration solutions for key banking platforms to streamline processes and improve reliability.',
                'Collaborated across teams to align data models and system integrations with business objectives.',
                'Delivered end-to-end data solutions, spanning backend processing to frontend consumption layers.',
              ]}
            >
            </ExperienceEntry>

            <ExperienceEntry
              date="06/2025 - 03/2026"
              role="Software Engineer II"
              company="CSG System Inc"
              status="Full Time"
              mb={1}
              responsibilities={[
                'Designed and delivered integration services with TMF-compliant standards in a microservices environment.',
                'Integrated Kafka event invalidation to ensure cache config consistency across multi-pod deployments.',
                'Improved TMF API performance through optimization and benchmarking, resulting in ~60% performance gain.',
              ]}
            >
            </ExperienceEntry>

            <ExperienceEntry
              date="12/2023 - 05/2025"
              role="Software Engineer Cloud Infra"
              company="Samsung Research"
              status="Full Time"
              mb={1}
              responsibilities={[
                'Participated in the public private cloud deployment and feature improvement of a Continuous Delivery (CD) as a Service platform.',
                'Managed Personally Identifiable Information (PII) data and network security enhancement within the platform.',
                'Regularly conducted performance testing and benchmarking across various technology stacks, optimizing configurations for existing deployments.',
              ]}
            >
            </ExperienceEntry>

            <ExperienceEntry
              date="10/2024 - 11/2024"
              role="Fullstack Engineer"
              company="Supreme Court of Indonesia"
              status="Temporary"
              mb={1}
              responsibilities={[
                'Developed full-stack web based notification system with Golang Gin and Vue.js along with Telegram bot integration for stakeholder registration and user notification.',
                'Provided the scrapping script using chromedp package and deployed app in Windows using NSSM and Nginx.'
              ]}
            >
            </ExperienceEntry>

            <ExperienceEntry
              date="02/2022 - 11/2023"
              role="Data Engineer"
              company="CAD-IT Consultant"
              status="Full Time"
              mb={1}
              responsibilities={[
                'Key individual responsible for overseeing log data management project valued at over USD 500,000.',
                'Provided an initial analysis, solution architecture, and resource sizing during pre-sales and pilot activity.',
                'Performed end-to-end data modeling and deployment process in accordance with screen requirements.',
              ]}
            >
            </ExperienceEntry>

            <ExperienceEntry
              date="09/2021 - 02/2022"
              role="Python Developer"
              company="Geniebook"
              status="Full Time"
              mb={1}
              responsibilities={[
                'Research and analyzed the business metrics performance ranging from Product, Sales, Engineering, etc.',
                'Provided a proof of concept (POC) real-time pipeline to stream change events between two database servers.',
                'Orchestrated the data pipelines and Slack bot development for enhanced business metrics reporting.'
              ]}>
            </ExperienceEntry>

            <ExperienceEntry
              date="02/2021 - 07/2021"
              role="Backend Engineer"
              company="Google Bangkit Academy"
              status="Internship"
              mb={1}
              responsibilities={[
                'Propose and designed system architecture enabling multi-platform deployment (Android and Web).',
                'Developed third-party API for lymphoblast cell image classification with the MobileNet model.',
                'Performed API testing and integration for dummy ML model with FastAPI framework.'
              ]}>
            </ExperienceEntry>
          </Box>
        </SlideIn>

      </Container>
    </Main>
  );
};

export default Home;