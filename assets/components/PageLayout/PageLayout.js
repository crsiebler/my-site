import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TemporaryDrawer from "components/TemporaryDrawer/TemporaryDrawer";
import ScrollTop from "components/ScrollTop/ScrollTop";
import StickyFooter from "components/StickyFooter/StickyFooter";
import Header from "./Sections/HeaderSection";
import NavagationSection from "./Sections/NavagationSection";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    padding: "0px",
  },
}));

const PageLayout = (props) => {
  const { children, title } = props;
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Header
        title={title}
        onMenuClick={toggleDrawer}
        drawerOpen={drawerOpen}
      />
      <TemporaryDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen}>
        <NavagationSection />
      </TemporaryDrawer>
      <Container
        component="main"
        maxWidth={false}
        classes={{ root: classes.container }}
      >
        {children}
      </Container>
      <ScrollTop />
      <StickyFooter />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageLayout;
