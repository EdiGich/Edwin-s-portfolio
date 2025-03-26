import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/EdiGich" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/edwin-gichira-9147a8213/",
  },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
