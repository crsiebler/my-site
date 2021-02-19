import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import projectImg1 from "images/project-uas-c2.jpg";
import projectImg2 from "images/project-nasa-sgss.jpg";
import projectImg3 from "images/project-nextos.png";
import projectImg4 from "images/project-walmart.png";
import projectImg5 from "images/project-mim.jpg";
import projectImg6 from "images/project-lone-butte-casino.jpg";
import AlbumCardSection from "./AlbumCardSection";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
}));

const AlbumGridSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg1}
            imgTitle="Lockheed Martin UAS C2"
            title="Unmanned Aerial System (UAS) Command and Control (C2)"
            description="The Lockheed Martin team integrated C2 and ISR systems 
                to provide mission planning, sensor and common operational 
                control for multiple UAS platforms, including Lockheed Martin's 
                UCLASS concept. Using an open architecture framework integrated 
                with DreamHammer's Ballista drone control software and Navy 
                compliant software protocols, a single operator managed 
                multiple UAS platforms simultaneously."
            href="https://www.lockheedmartin.com/en-us/products/isr-uas.html"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg2}
            imgTitle="NASA SGSS"
            title="NASA Space Ground Segment Sustainment (SGSS)"
            description="NASA’s Space Network is made up of several Tracking 
                and Data Relay Satellites (TDRS) in geosynchronous orbit which 
                relay data signals from orbiting platforms, including the 
                Hubble Space Telescope and International Space Station, to the 
                ground. The Ground Segment, comprised of antennas, electronics, 
                computers and networking equipment, receives the relayed data 
                signals, processes them, and distributes them to the individual 
                users."
            href="https://gdmissionsystems.com/satellite-ground-systems/space-network-ground-segment-sustainment"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg3}
            imgTitle="Nextiva Products"
            title="Nextiva NextOS"
            description="Nextiva is a cloud-based all-in-one unified business 
                communications platform, team collaboration tool, and customer 
                service software. Top products include Nextiva’s VoIP business 
                phone system, Sales and Customer CRM tools, and advanced 
                Analytics and Reporting."
            href="https://www.nextiva.com/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg4}
            imgTitle="Walmart Sierra Vista"
            title="Walmart at Charlston Crossing"
            description="A new Walmart 43-acre site located in the shopping 
                center at Charleston Road and the Highway 90 Bypass. Located in 
                Sierra Vista, Arizona. Provided estimation and project 
                management for Grounds Control Landscape Company."
            href="https://www.groundscontrol.com/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg5}
            imgTitle="Musical Instrument Museum"
            title="Musical Instrument Museum"
            description="MIM has a collection of more than 8,000 instruments 
                from more than 200 world countries. The galleries reflect the 
                rich diversity and history of many world cultures. But music and
                instruments also show us what we have in common—a thought
                powerfully expressed in our motto, music is the language of the
                soul. General contractor Ryan Companies, and landscape 
                architect Ten Eyck Landscape Architects."
            href="https://mim.org/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AlbumCardSection
            imgSrc={projectImg6}
            imgTitle="Lone Butte Casino"
            title="Lone Butte Casino"
            description="Lone Butte Casino was opened in November of 2008 and 
                features unique design elements. Dramatic entryway canopies 
                with changing lights greet each player as they enter through 
                one of three themed passages. One represents earth, one fire 
                and the third represents water. The art work displayed 
                throughout the casino is commissioned from local Native 
                American artists. General contactor J.E. Dunn Construction."
            href="https://playatgila.com/"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AlbumGridSection;
