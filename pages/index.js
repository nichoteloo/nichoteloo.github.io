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
import Tech from "../components/tech";
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
                Data Engineering and Data Management
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
              Hi there, I&apos;m Nicolas. I&apos;m a strong engineering professional looking forward
              to provide positive results. I have worked on projects involving machine learning, 
              data engineering, and data management. Having exposure to design latest end to end 
              ETL pipeline using data engineering tools and technologies such as Python, 
              Go, SQL, Airflow, Kafka, AWS Lambda, etc. Currently working as a Data Engineer in a
              global software and system integrator company in Bandung, Indonesia.
            </Text>

            <Box align="center" mt={5}>
              <NextLink href="https://drive.google.com/file/d/1S8az0lKDwU-i2oMf25a83cAKlDgI0uvJ/view?usp=sharing" passHref>
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
              Tech Stacks
            </Heading>
            <Flex
                justifyContent="start"
                alignItems="center"
                direction="row"
                wrap="wrap"
            >
              <Tech title="MySQL" color="teal" />
              <Tech title="MySQL Server" color="messenger" />
              <Tech title="PostgreSQL" color="yellow" />
              <Tech title="InfluxDB" color="red" />
              <Tech title="ElasticSearch" color="gray" />
              <Tech title="Airflow" color="cyan" />
              <Tech title="SSIS" color="orange" />
              <Tech title="Git" color="messenger" />
              <Tech title="AWS Lambda" color="green" />
              <Tech title="AWS Redshift" color="blue" />
              <Tech title="AWS S3" color="teal" />
              <Tech title="Docker" color="blue" />
              <Tech title="Gitlab CI" color="facebook" />
              <Tech title="Flask" color="cyan" />
              <Tech title="Gin" color="orange" />
              <Tech title="Django" color="yellow" />
              <Tech title="Linux/Unix" color="blue" />
              <Tech title="Apache Kafka" color="green" />
              <Tech title="Scikit-learn" color="gray" />
              <Tech title="Tensorflow" color="purple" />
              <Tech title="Keras" color="cyan" />
              <Tech title="Pandas" color="teal" />
              <Tech title="PySpark" color="messenger" />
              <Tech title="NextJS" color="gray" />
              <Tech title="PowerBI" color="red" />
              <Tech title="Plotly" color="purple" />
              <Tech title="PTC Thingworx" color="yellow" />
              <Tech title="Node Red" color="teal" />
              <Tech title="Grafana" color="facebook" />
              <Tech title="GCP Cloud Run" color="green" />
            </Flex>
          </Box>
        </SlideIn>

        <SlideIn delay={0.6} time={1} direction="left">
          <Box mt={10}>
            <Heading as="h3" variant="sectionTitle">
              Work Experience
            </Heading>

            <ExperienceEntry 
              date="02/2022 - Present" 
              role="Data Engineer" 
              company="at CAD-IT Consultant Pte Ltd"
              client="1. Collins Aerospace SG Operations Modernization (Scale Up)"
              indent={8}
              mb={1}
              responsibilities={[
                'Maintain complex ETL pipeline from SAP platform into MySQL Server.',
                'Perform data management and data quality checking across multiple dimensions according to business context.',
                'Create and maintain SQL views, store procedures, triggers, schemas, indexes, and tables in MySQL Server.',
                'Perform system upgrades, and maintenances according to business needs.'
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="2. CAD IT Manufacture Asset Management (MAM)"
              indent={8}
              mb={1}
              responsibilities={[
                'Schema reconstruction for MAM database in PostgreSQL and MySQL Server.',
                'Setup Gitlab CI/CD pipeline for manufacturing management project.',
                'Configure Gitlab CI pipeline integration with Liquibase version control.'
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry 
              client="3. CAD IoT Lab Robotic Process Automation (RPA)"
              indent={8}
              mb={1}
              responsibilities={[
                'Develop robotic process automation (RPA) script for screen automation.',
                'Create GUI Desktop application to help client control the automation flow.'
              ]}
              >
            </ExperienceEntry>

            <ExperienceEntry
              client="4. Additional Project Support and Training"
              indent={8}
              mb={8}
              responsibilities={[
                'Perform data modeling, data mapping, and data inventory.',
                'Provide proof-of-concept about end-to-end modern ETL pipeline in AWS (S3, Lambda, Redshift) with Boto3 SDK.'
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
                'Develop scheduled data pipeline related to metrics formulation with Airflow.',
                'Maintain slack apps as a part of the query engine for client reporting.',
                'Support data cleaning, data ingestion, and data reporting periodically.'
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
              title="Framework Optimization of Fingerprint Method For Wi-Fi Based Indoor Positioning Technique
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
              <AchievementEntry title='AWS Digital Talent Scholarship, 2020.' issuer='Ministry of Comm and Informatics.'/>
              <AchievementEntry title='Hankook Scholarship Awardee, 2019.' issuer='PT Hankook Tire Welfare Foundation.'/>
              <AchievementEntry title='PGN Scholarship Awardee, 2020.' issuer='PT Perusahaan Gas Negara Indonesia.'/>
              <AchievementEntry title='Funded PKM-Karsa Cipta, 2019.' issuer='Ministry of Research and Technology.'/>
            </SimpleGrid>
          </Box>
        </SlideIn>

      </Container>
    </Main>
  );
};

export default Home;