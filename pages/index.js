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
        <SlideIn delay={0} time={1} direction="left">
          <Box>
            <Image
              src="/images/myself.jpg"
              alt="Nicolas C."
              borderWidth="4px"
              borderStyle="solid"
              borderColor="gray.300"
              borderRadius="50%"
              height={{ lg:"100px", md:"195px", sm:"185px" }}
              maxW={{ lg:"300px", md:"195px", sm:"185px" }}
              mr={-1}
              mt={10}
              mb={5}
            ></Image>
          </Box>

          <Box display="flex" flexDirection="column">
            <Text 
              fontSize={{ lg: "20px", md: "18px", sm: "17px" }} 
              ml={{ lg:"0px", md:"0px", sm:"0px" }}>
              Hello!
            </Text>
          </Box>

          <Box mt={4}>
            <Text 
              variant="indented"
              fontSize={{ lg:"16px", md:"15px", sm: "15px" }} 
              ml={{ lg:"0px", md:"2px", sm:"5px" }} 
              mr={{ lg:"0px", md:"2px", sm:"5px" }}>
              I&apos;m Nicolas. I work as a software and product engineer from Indonesia with more than 3 years of experience. 
              Act as a technologies with numbers of international projects exposure and wide spectrum of software development life cycle.
              I have worked on several projects involving cloud infrastructure and data engineering. 
              Currently working as a Cloud Infra Engineer at Samsung Research Indonesia.
            </Text>
          </Box>
        </SlideIn>
        
        <SlideIn delay={0.2} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Tech Stack
            </Heading>
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="row"
                wrap="wrap"
            >
              <Expertise title="Data Engineering" color="green" />
              <Expertise title="Cloud Native" color="facebook" />
              <Expertise title="Amazon Web Services" color="orange"/>
              <Expertise title="Performance Testing" color="red" />
            </Flex>
          </Box>
        </SlideIn>

        <SlideIn delay={0.4} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Work Experience
            </Heading>

            <ExperienceEntry
              date="12/2023 - Present"
              role="Cloud Infra Engineer"
              company="at Samsung Research Indonesia"
              indent={8}
              mb={8}
              responsibilities={[
                'Supervised, maintained, and benchmarked global core messaging platform implement in microservice architecture and build on top of the actor model framework.',
                'Engaged in the private cloud integration feature enablement of a Continuous Delivery (CD) as a Service platform, resulting in annual cost reductions in the public cloud.',
                'Orchestrated the migration of Personally Identifiable Information (PII) data from public to private Key Management Service (KMS) hosting, ensuring cost-effectiveness and compliance with data privacy standards.',
                'Improved code quality and test coverage scores to satisfy regulatory standards, assuring compliance with minimum acceptance criteria.',
                'Took the lead in initiating performance benchmark procedures for various Java native frameworks as a foundation for consideration before planning a technology migration in the core backend service.',
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
                'Key individual responsible for overseeing log data management project valued at over USD 500,000.',
                'Provided an initial analysis, solution architecture, and resource sizing during pre-sales and pilot activity.',
                'Assisted in the advancement of data mapping, parameter correlations, and addressing technical inquiries.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="2. Project - Port Digitalization and Monitoring - Port Management Company - IDN"
              indent={8}
              mb={1}
              responsibilities={[
                'Performed end-to-end data modeling and deployment process in accordance with screen requirements.',
                'Designed, tuned, and maintained machine database to handle more than 500 data stream each second.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="3. Project - Digital Shop Floor Data Processing - Aerospace Manufacturing Company - SG"
              indent={8}
              mb={1}
              responsibilities={[
                'Improved ETL performance by reducing execution time by 90% for SAP-MSSQL Server data processing.',
                'Performed data quality check, assess as-is system performance and provide technical documentation.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="4. Project - Factory Machine Data Migration - Glove Manufacturing Company - MY"
              indent={8}
              mb={1}
              responsibilities={[
                'Maintained SSIS package for machine data synchronization between on-premise and cloud databases.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry
              client="5. Presales - SDK Platform Integration - Semiconductor Company based - TH"
              indent={8}
              mb={1}
              responsibilities={[
                'Conducted a feasibility study about SECS/GEM protocol and SecsToTool.NET simulator platform. ',
                'Provided several approaches for system integration solutions based on NET-based plugin development.',
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry
              client="6. RnD - Robot Process Automation - CAD-IT Singapore IoT Lab - SG"
              indent={8}
              mb={8}
              responsibilities={[
                'Developed RPA application and Webhook middleware to automate manual tasks.',
              ]}
              >
            </ExperienceEntry>
            
            <ExperienceEntry 
              date="09/2021 - 02/2022"
              role="Python Developer"
              company="at Geniebook Pte Ltd"
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
          </Box>
        </SlideIn>

        <SlideIn delay={0.8} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Education
            </Heading>

            <EducationEntry 
              date="08/2017 - 07/2021"
              expertise="Engineering Physics, Universitas Gadjah Mada."
              title="Framework Optimization of Fingerprint Method For Wi-Fi Based Indoor Positioning Expertisenique
              Through Implementation of DBSCAN-K Means Hybrid Clustering and Improved WKNN">
            </EducationEntry>
          </Box>
        </SlideIn>

        <SlideIn delay={1.0} time={1} direction="right">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Achievements
            </Heading>

            <SimpleGrid mt={8} columns={[1, 2, 2, 2]} gap={6}>
              <AchievementEntry title='AWS Digital Talent Scholarship, 2021.' issuer='Ministry of Comm and Informatics.'/>
              <AchievementEntry title='PGN Scholarship Awardee, 2020.' issuer='PT Perusahaan Gas Negara Indonesia.'/>
              <AchievementEntry title='Hankook Scholarship Awardee, 2019.' issuer='PT Hankook Tire Welfare Foundation.'/>
              <AchievementEntry title='Funded Research Program PKM, 2019.' issuer='Ministry of Research and Expertisenology.'/>
            </SimpleGrid>
          </Box>
        </SlideIn>

      </Container>
    </Main>
  );
};

export default Home;