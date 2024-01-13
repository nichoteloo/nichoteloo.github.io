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
import EducationEntry from "../components/education";
import AchievementEntry from "../components/achievement";
import CertificationEntry from "../components/certification";
import Expertise from "../components/tech";
import { Box, Container, Heading, Text, Button, Image, Flex, SimpleGrid } from "@chakra-ui/react";

const Home = () => {
  return (
    <Main title="Homepage">
      <Container px={5} pt={20} maxW={{ lg:"container.md", md:"container.md", sm:"container.sm" }}>
        <SlideIn delay={0} time={1} direction="right">
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column">
              <Heading as="h1" fontFamily="initial" fontSize={{ lg: "5xl", md: "4xl", sm: "3xl" }}>
                Nicolas Christianto
              </Heading>
              <Text fontSize={{ lg: "20px", md: "18px", sm: "17px" }}>
                Data-ops Engineer
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/me.jpg"
                alt="Nicolas C."
                borderWidth="4px"
                borderStyle="solid"
                borderColor="gray.300"
                borderRadius="50%"
                maxW={{ lg:"200px", md:"195px", sm:"185px" }}
                mr={-1}
                mt={10}
                mb={5}
              ></Image>
            </Box>
          </Box>
        </SlideIn>

        <SlideIn delay={0.2} time={1} direction="left">
          <Box mt={4}>
            <Heading as="h3" variant="sectionTitle">
              About
            </Heading>
            <Text variant="indented" fontSize={{ lg:"16px", md:"15px", sm: "15px" }} ml={{ lg:"0px", md:"2px", sm:"5px" }} mr={{ lg:"0px", md:"2px", sm:"5px" }}>
              Hi there, I&apos;m Nicolas. I&apos;m Software Engineer with more than 2 years of professional experience in solution design and
              integration. I have worked on several projects involving cloud infrastructure, data engineering,  
              and system integration. Currently working as a Cloud Infra Engineer at Global Samsung Research based in Jakarta, Indonesia.
            </Text>

            <Box align="center" mt={5}>
              <NextLink href="https://drive.google.com/file/d/1Xdek6QebgN1RSkC6gBDr2B6jk2nKXvL-/view?usp=sharing" passHref>
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
          </Box>
        </SlideIn>
        
        <SlideIn delay={0.4} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Expertise
            </Heading>
            <Flex
                justifyContent="start"
                alignItems="center"
                direction="row"
                wrap="wrap"
            >
              <Expertise title="Data Extraction" color="green" />
              <Expertise title="Data Profiling" color="gray" />
              <Expertise title="Data Modeling" color="orange" />
              <Expertise title="Data Processing" color="purple" />
              <Expertise title="CI/CD" color="blue" />
              <Expertise title="Data Migration" color="orange" />
              <Expertise title="Query Tuning" color="messenger" />
              <Expertise title="Performance Testing" color="red" />
              <Expertise title="System Integration" color="facebook" />
              <Expertise title="Distributed System" color="cyan" />
              <Expertise title="Event Driven Architecture" color="purple" />
              <Expertise title="Cloud Native Object" color="green" />
            </Flex>
          </Box>
        </SlideIn>

        <SlideIn delay={0.6} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Work Experience
            </Heading>

            <ExperienceEntry
              date="11/2023 - Present"
              role="Cloud Infra Engineer"
              company="Samsung Research Indonesia"
              indent={8}
              mb={8}
              responsibilities={[
                'Develop and maintain microservices build on top of Actor Model Framework focused in Cloud Technology.',
                'Create benchmark about performance comparison between several Actor Model Frameworks in the aspect of messaging criteria and activation criteria.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              date="02/2022 - 11/2023" 
              role="Data Engineer" 
              company="at CAD-IT Consultant Pte Ltd"
              client="1. Project - Test Cell Machine Failure Analysis - Semiconductor Company - SG"
              indent={8}
              mb={1}
              responsibilities={[
                'Played key individual responsible to log data management for a project worth more than USD 500.000.',
                'Provide initial analysis, solution architecture, and resource sizing in during pre-sales and pilot activity.',
                'Assist in the advancement of data mapping, parameter correlations, and addressing technical inquiries.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="2. Project - Port Digitalization and Monitoring - Port Management Company - IDN"
              indent={8}
              mb={1}
              responsibilities={[
                'Perform end-to-end data modeling and deployment process in accordance with screen requirements.',
                'Design, tune, and maintain machine database to handle more than 500 sensor data stream each second.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="3. Project - Digital Shop Floor Data Processing - Aerospace Manufacturing Company - SG"
              indent={8}
              mb={1}
              responsibilities={[
                'Improve ETL performance by reducing execution time by 90% for SAP-MSSQL Server data processing.',
                'Perform data quality check, assess as-is system performance and provide technical documentation.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="4. Project - Factory Machine Data Migration - Glove Manufacturing Company - MY"
              indent={8}
              mb={1}
              responsibilities={[
                'Maintain SSIS package for machine data synchronization between on-premise and cloud databases.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry
              client="5. Presales - SDK Platform Integration - Semiconductor Company based - TH"
              indent={8}
              mb={1}
              responsibilities={[
                'Conduct a feasibility study about SECS/GEM protocol and SecsToTool.NET simulator platform.',
                'Provide several approaches for system integration solutions based on NET-based plugin development.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry
              client="6. RnD - Robot Process Automation - CAD-IT Singapore IoT Lab - SG"
              indent={8}
              mb={8}
              responsibilities={[
                'Develop RPA application and Webhook middleware to automate manual tasks.',
              ]}
              >
            </ExperienceEntry>
            
            <ExperienceEntry 
              date="09/2021 - 02/2022"
              role="Python Developer"
              company="at Geniebook Pte Ltd"
              mb={8}
              responsibilities={[
                'Research and analyze the business metrics performance ranging from Product, Sales, Engineering, and any other departments.',
                'Provide change data capture (CDC) and consumer service approaches to test event streaming between two MySQL with Apache Kafka.',
                'Develop cron jobs and data pipeline related to metrics formulation with Airflow integrated with Bitbucket.',
                'Maintain Slack apps as a part of the query engine for client reporting.',
                'Support data cleaning and data preparation for the data mart development process'
              ]}>
            </ExperienceEntry>

            <ExperienceEntry 
              date="02/2021 - 07/2021"
              role="Backend Engineer"
              company="at Google Bangkit Academy"
              mb={8}
              responsibilities={[
                'Develop third-party API for lymphoblast cell image classification with MobileNet pre-trained model with Flask web framework.',
                'Provide a web dashboard with AppSeed Flask open source dashboard.',
                'Perform API testing for dummy ML model with FastAPI framework.'
              ]}>
            </ExperienceEntry>
          </Box>
        </SlideIn>

        <SlideIn delay={0.8} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Certifications
            </Heading>

            <CertificationEntry 
              issuer="Coursera"
              title="Tensorflow Developer Specialization supported by DeepLearning.ai"/>
            
            <CertificationEntry 
              issuer="Coursera"
              title="Tensorflow Data Deployment Specialization supported by DeepLearning.ai"/>
            
            <CertificationEntry 
              issuer="Coursera"
              title="Google IT Support for Professional & Google Automation with Python"/>

            <CertificationEntry 
              issuer="Amazon Web Service"
              title="AWS Academy Graduate with Cloud Foundations Specialization"/>

            <CertificationEntry 
              issuer="Siemens Digital Academy"
              title="Industrial Ethernet, Process Control Basic, Profinet"/>
          </Box>
        </SlideIn>

        <SlideIn delay={1.0} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Education
            </Heading>

            <EducationEntry 
              date="08/2017 - 07/2021"
              expertise="Engineering Physics, Universitas Gadjah Mada, (3.42/4.00)."
              title="Framework Optimization of Fingerprint Method For Wi-Fi Based Indoor Positioning Expertisenique
              Through Implementation of DBSCAN-K Means Hybrid Clustering and Improved WKNN">
            </EducationEntry>
          </Box>
        </SlideIn>

        <SlideIn delay={1.2} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Achievements
            </Heading>

            <SimpleGrid mt={8} columns={[1, 2, 2, 2]} gap={6}>
              <AchievementEntry title='AWS Digital Talent Scholarship, 2021.' issuer='Ministry of Comm and Informatics.'/>
              <AchievementEntry title='Hankook Scholarship Awardee, 2019.' issuer='PT Hankook Tire Welfare Foundation.'/>
              <AchievementEntry title='PGN Scholarship Awardee, 2020.' issuer='PT Perusahaan Gas Negara Indonesia.'/>
              <AchievementEntry title='Funded PKM-Karsa Cipta, 2019.' issuer='Ministry of Research and Expertisenology.'/>
            </SimpleGrid>
          </Box>
        </SlideIn>

      </Container>
    </Main>
  );
};

export default Home;