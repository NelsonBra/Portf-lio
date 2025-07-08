import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@NelsonBra",
    icon: Icons.gitHub,
    link: "https://github.com/NelsonBra/",
  },
  {
    name: "LinkedIn",
    username: "Nelson Bravo",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/nelson-bravo-825196227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "NelsonBravo",
    icon: Icons.gmail,
    link: "bravonelson014@gmail.com",
  },
];
