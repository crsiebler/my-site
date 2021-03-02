import React from "react";
import Image from "material-ui-image";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SectionHeader from "components/SectionHeader/SectionHeader";
import logoNextiva from "images/logo-nextiva.png";
import logoGeneralDynamics from "images/logo-generaldynamics.png";
import logoLockheedMartin from "images/logo-lockheedmartin.png";
import logoGhostArmor from "images/logo-ghostarmor.png";

const ResumeExperienceSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid item md={8} xs={12}>
      <SectionHeader variant="h4" text="Work Experience" />
      <Grid container direction="column" justify="flex-start" spacing={4}>
        <Grid item>
          <Image
            src={logoNextiva}
            aria-label="Nextiva"
            imageStyle={{ width: "35%", minWidth: "310px", height: "auto" }}
            style={{ paddingTop: matches ? "172px" : "131px" }}
          />
          <Typography variant="h6">Nextiva | Software Engineer II</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Scottsdale, AZ | July 2019 - January 2021
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="subtitle2">
                Roles and Responsibilities:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Typography variant="body1">
                    Develop backend microservices using Python Pyramid and
                    Tornado frameworks.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Implement new features and redesign existing user interface
                    using ReactJS with hooks.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Deploy Dockerized applications and Node packages using
                    automated pipelines in Jenkins to Kubernetes clusters.
                  </Typography>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel1b-content"
              id="panel1b-header"
            >
              <Typography variant="subtitle2">
                Technologies Utilized:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                JavaScript, Python, React.js, Redux.js, Pyramid, Tornado, Java,
                Spring, PostgreSQL, RabbitMQ, Nginx, Tyk, Docker, Kubernetes,
                Jenkins, Jira, Bitbucket, Confluence, LocalStack, AWS S3, AWS
                RDS, AWS ECS
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Image
            src={logoGeneralDynamics}
            title="General Dynamics"
            imageStyle={{ width: "35%", minWidth: "310px", height: "auto" }}
            style={{ paddingTop: matches ? "214px" : "167px" }}
          />
          <Typography variant="h6">
            General Dynamics | Senior Software Engineer II
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Scottsdale, AZ | June 2015 - June 2019
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel2b-content"
              id="panel2b-header"
            >
              <Typography variant="subtitle2">
                Roles and Responsibilities:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Typography variant="body1">
                    Assist in all database operations for the Enterprise
                    Infrastructure segment of the NASA SGSS project.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Design and develop relational databases utilizing Oracle
                    Exadata, MS SQL, and MySQL products.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Employ OLTP 3NF & OLAP star schema principles and create
                    entity relationship models depicting database structure.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Create Python scripts to perform various tasks like parsing
                    Excel spreadsheets and generating SQL statements.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Maintain and configure COTS applications, such as ODI,
                    GoldenGate, and OBIEE, for use on projects.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Communicate with NASA engineers at White Sands and Goddard
                    to verify data and provide pre-deployment training.
                  </Typography>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel2b-content"
              id="panel2b-header"
            >
              <Typography variant="subtitle2">
                Technologies Utilized:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Java, J2EE, Jenkins, Python, NumPy, OpenPyxl, SQL, PL/SQL, Bash,
                RedHat Linux, VMware vSphere, Oracle Database, Oracle WebLogic,
                Oracle Exadata, Oracle Business Intelligence, Oracle Data
                Integrator, Oracle GoldenGate, Eclipse, Star Schema, 3NF
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Image
            src={logoLockheedMartin}
            aria-label="Lockheed Martin"
            imageStyle={{ width: "35%", minWidth: "310px", height: "auto" }}
            style={{ paddingTop: matches ? "230px" : "177px" }}
          />
          <Typography variant="h6">
            Lockheed Martin | Technologies Specialist
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Goodyear, AZ | May 2014 - January 2015
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="subtitle2">
                Roles and Responsibilities:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Typography variant="body1">
                    Assist IRAD to provide Processing, Exploitation, and
                    Dissemination (PED) on UAS Control Segment (UCS).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Develop OSGi bundles utilizing Java, Apache Maven, and
                    Apache Karaf.
                  </Typography>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel3b-content"
              id="panel3b-header"
            >
              <Typography variant="subtitle2">
                Technologies Utilized:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Java, Maven, OSGi, Xuggler, FFmpeg, OpenCV, Jira, Git, NetBeans,
                DreamHammer Ballista®, TCP/IP video dissemination, UDP video
                broadcast, Apache Karaf, Apache ActiveMQ, Apache Derby, Apache
                ZooKeeper
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Image
            src={logoGhostArmor}
            aria-label="Ghost Armor"
            imageStyle={{ width: "35%", minWidth: "310px", height: "auto" }}
            style={{ paddingTop: matches ? "56px" : "43px" }}
          />
          <Typography variant="h6">Ghost Armor | Web Developer</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Mesa, AZ | May 2012 - April 2014
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="subtitle2">
                Roles and Responsibilities:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Typography variant="body1">
                    Maintain an eCommerce website built on Symfony framework.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Provide in office IT support along with on the phone help
                    for approximately fifty remote locations throughout the U.S.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Develop new applications, such as an asset management
                    system, and scripts to improve reporting and automate tasks.
                  </Typography>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aira-controls="panel4b-content"
              id="panel4b-header"
            >
              <Typography variant="subtitle2">
                Technologies Utilized:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                PHP, Symfony2, Twig, MySQL, CSS, jQuery, AJAX, Foundation
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeExperienceSection;
