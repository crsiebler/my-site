import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillCard from "components/SkillCard/SkillCard";
import { skills } from "constants/skillConstants";

const LandingSkillsGridSection = () => (
  <Grid container alignItems="stretch" justify="center" spacing={1}>
    {skills.map((skill, index) => (
      <Grid key={index} item xs={6} sm={4} md={3}>
        <SkillCard title={skill.title} icons={skill.icons} body={skill.body} />
      </Grid>
    ))}
  </Grid>
);

export default LandingSkillsGridSection;
