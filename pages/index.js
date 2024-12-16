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
import CertificationEntry from "../components/certification";
import Expertise from "../components/tech";
import { Box, Container, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Main title="Home">
      <Container px={5} pt={20} maxW={{ lg:"container.md", md:"container.md", sm:"container.sm" }}>
        <SlideIn delay={0} time={1} direction="left">
          <Box>
            <Image
              src="/images/myself.jpg"
              alt="Nicolas C."
              borderWidth="4px"
              borderStyle="solid"
              borderColor="gray.300"
              borderRadius="50%"
              height={{ lg:"90px", md:"145px", sm:"135px" }}
              maxW={{ lg:"100px", md:"145px", sm:"135px" }}
              mx={{ lg:"0", md:"auto", sm:"auto" }}
              mt={10}
              mb={5}
            ></Image>
          </Box>

          <Box>
            <Text 
              fontSize={{ lg: "20px", md: "18px", sm: "17px" }} 
              mx={{ lg:"0", md:"1", sm:"1" }}>
              <b>Hello!</b>
            </Text>
          </Box>

          <Box mt={4}>
            <Text 
              textAlign="justify"
              fontSize={{ lg:"16px", md:"15px", sm: "15px" }} 
              ml={{ lg:"0px", md:"2px", sm:"5px" }} 
              mr={{ lg:"0px", md:"2px", sm:"5px" }}>
              I&apos;m Nicolas. I work as a software and product engineer from Indonesia with more than 3 years of experience. 
              Act as a technologies with numbers of international projects exposure and wide spectrum of software development life cycle.
              I have worked on several projects involving cloud infrastructure and data engineering. 
              Currently working as a Cloud Infra Engineer at <a href="https://www.samsung.com/id/srin/" target="_blank" class="underline"><i>Samsung Research Indonesia</i></a>.
            </Text>
          </Box>

          <Box align="center" mt={5}>
            <NextLink href="https://drive.google.com/file/d/1RGDfXQAprYHXaoBJtSzsqSA9cPeWBkBu/view?usp=sharing" passHref>
              <Button mr={2} fontSize={{ lg:"16px", md:"15px", sm: "14px" }} align="center" rightIcon={<AiOutlineDownload />} colorScheme="gray" h={8}>
                Resume
              </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Button ml={2} fontSize={{ lg:"16px", md:"15px", sm: "14px" }} align="center" rightIcon={<ChevronRightIcon />} colorScheme="gray" h={8}>
                Projects
              </Button>
            </NextLink>
          </Box>
        </SlideIn>
        
        <SlideIn delay={0.2} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" fontSize={{ lg:"22px", md:"20px", sm: "20px" }} variant="sectionTitle">
              Expertise
            </Heading>
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="row"
                wrap="wrap"
            >
              <Expertise title="Cloud Native App" color="facebook" />
              <Expertise title="Amazon Web Services" color="orange"/>
              <Expertise title="Data Engineering" color="green" />
              <Expertise title="Performance Test" color="red" />
            </Flex>
          </Box>
        </SlideIn>

        <SlideIn delay={0.4} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" fontSize="20px" variant="sectionTitle">
              Work Experience
            </Heading>

            <ExperienceEntry
              date="12/2023 - Present"
              role="Cloud Infra Engineer"
              company="at Samsung Research Indonesia"
              status="Full Time"
              indent={4}
              mb={8}
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
              company="at Supreme Court of Republic Indonesia"
              status="Temporary"
              indent={4}
              mb={8}
              responsibilities={[
                'Developed full-stack web based notification system with Golang Gin and Vue.js along with Telegram bot integration for stakeholder registration and user notification.',
                'Provided the scrapping script using chromedp package and deployed app in Windows using NSSM and Nginx.'
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              date="02/2022 - 11/2023" 
              role="Data Engineer" 
              company="at CAD-IT Consultant Pte Ltd"
              status="Full Time"
              indent={4}
              mb={1}
              responsibilities={[
                'Key individual responsible for overseeing log data management project valued at over USD 500,000.',
                'Provided an initial analysis, solution architecture, and resource sizing during pre-sales and pilot activity.',
                'Performed end-to-end data modeling and deployment process in accordance with screen requirements.',
                'Improved ETL performance by reducing execution time by 90% for SAP-MSSQL Server data processing.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              date="09/2021 - 02/2022"
              role="Python Developer"
              company="at Geniebook Pte Ltd"
              status="Full Time"
              mb={8}
              responsibilities={[
                'Research and analyzed the business metrics performance ranging from Product, Sales, Engineering, etc.',
                'Provided a proof of concept (POC) real-time pipeline to stream change events between two database servers.',
                'Orchestrated the data pipelines and Slack bot development for enhanced business metrics reporting.'
              ]}>
            </ExperienceEntry>

            <ExperienceEntry 
              date="02/2021 - 07/2021"
              role="Backend Engineer"
              company="at Google Bangkit Academy"
              status="Internship"
              mb={8}
              responsibilities={[
                'Propose and designed system architecture enabling multi-platform deployment (Android and Web).',
                'Developed third-party API for lymphoblast cell image classification with the MobileNet model.',
                'Performed API testing and integration for dummy ML model with FastAPI framework.'
              ]}>
            </ExperienceEntry>
          </Box>
        </SlideIn>

        <SlideIn delay={0.6} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" fontSize="20px" variant="sectionTitle">
              Certifications
            </Heading>

            <CertificationEntry 
              title="Tensorflow Developer Specialization supported by DeepLearning.ai"/>
            
            <CertificationEntry 
              title="Tensorflow Data Deployment Specialization supported by DeepLearning.ai"/>
            
            <CertificationEntry 
              title="Google IT Support for Professional & Google Automation with Python"/>

            <CertificationEntry 
              title="AWS Academy Graduate with Cloud Foundations Specialization"/>
          </Box>
        </SlideIn>

      </Container>
    </Main>
  );
};

export default Home;