import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResponsiveAppBar from "components/ResponsiveAppBar/ResponsiveAppBar";
import ResponsiveDrawer from "components/ResponsiveDrawer/ResponsiveDrawer";
import ScrollTop from "components/ScrollTop/ScrollTop";
import StickyFooter from "components/StickyFooter/StickyFooter";
import { drawerWidth } from "constants/drawerConstants";
import { menuItems } from "constants/navigationConstants";
import AvatarSection from "./Sections/AvatarSection";
import NavigationSection from "./Sections/NavigationSection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  container: {
    padding: "0px",
  },
}));

const PageLayout = (props) => {
  const { children, title } = props;
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title} | Cory Siebler</title>
      </Helmet>
      <ResponsiveAppBar
        menuItems={menuItems}
        title={title}
        onMenuClick={toggleMenu}
        menuOpen={menuOpen}
      >
        <AvatarSection />
        <NavigationSection />
      </ResponsiveAppBar>
      <ResponsiveDrawer>
        <AvatarSection />
        <NavigationSection />
      </ResponsiveDrawer>
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
  title: PropTypes.string,
};

PageLayout.defaultProps = {
  title: "Cory Siebler",
};

export default PageLayout;
