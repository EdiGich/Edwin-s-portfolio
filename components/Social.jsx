import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  {
    socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      );
    });
  }
  return <div>Social</div>;
};
export default Social;
