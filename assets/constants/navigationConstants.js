import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StackOverflowIcon from "icons/StackOverflowIcon";
import TwitchIcon from "icons/TwitchIcon";

export const iconColorPrimary = "#FFF";
export const iconColorSecondary = "#3F51B5";

export const menuItems = [
  {
    ariaLabel: "LinkedIn",
    href: "https://linkedin.com/in/cory-siebler",
    icon: <LinkedInIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
  {
    ariaLabel: "phone",
    href: "tel:14803192922",
    icon: <PhoneIcon style={{ color: iconColorPrimary }} />,
  },
  {
    ariaLabel: "email",
    href: "mailto:cory.siebler@protonmail.com",
    icon: <MailIcon style={{ color: iconColorPrimary }} />,
  },
  {
    ariaLabel: "Twitter",
    href: "https://twitter.com/CorySiebler",
    icon: <TwitterIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
  {
    ariaLabel: "GitHub",
    href: "https://github.com/crsiebler",
    icon: <GitHubIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
  {
    ariaLabel: "StackOverflow",
    href: "https://stackoverflow.com/users/story/15115575",
    icon: <StackOverflowIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
];

export const creatorItems = [
  {
    ariaLabel: "Twitch.tv",
    href: "https://twitch.tv/Ekvelt",
    icon: (
      <TwitchIcon
        style={{
          color: iconColorPrimary,
          fontSize: "1.5rem",
          transform: "scale(1.3)",
        }}
      />
    ),
    target: "_blank",
  },
  {
    ariaLabel: "YouTube",
    href: "https://youtube.com/channel/corysiebler",
    icon: <YouTubeIcon style={{ color: iconColorPrimary }} />,
    target: "_blank",
  },
];
