import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

export const iconColorPrimary = "#FFF";
export const iconColorSecondary = "#3F51B5";

export const menuItems = [
  {
    ariaLabel: "GitHub",
    href: "https://github.com/crsiebler",
    icon: <GitHubIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
  {
    ariaLabel: "email",
    href: "mailto:cory.siebler@protonmail.com",
    icon: <MailIcon style={{ color: iconColorPrimary }} />,
  },
];
