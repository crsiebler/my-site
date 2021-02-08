import React from "react";
import PropTypes from "prop-types";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import SimpleAppBar from "components/SimpleAppBar/SimpleAppBar";

const Header = (props) => {
  const { title, onMenuClick } = props;

  const menuItems = [
    {
      ariaLabel: "landing page",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      ariaLabel: "contact me",
      href: "/contact",
      icon: <EmailIcon />,
    },
    {
      ariaLabel: "GitHub",
      href: "https://github.com/crsiebler",
      icon: <GitHubIcon />,
      target: "_blank",
    },
  ];

  return (
    <SimpleAppBar
      menuItems={menuItems}
      title={title}
      onMenuClick={onMenuClick}
    />
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
