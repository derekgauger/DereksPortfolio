import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaLinux,
  FaWindows,
  FaJava,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiMongodb,
  SiPostgresql,
  SiAmazondynamodb,
  SiExpress,
  SiGo,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiRedux,
  SiTailwindcss,
  SiMicrosoftazure
} from "react-icons/si";

const iconMappings: { [key: string]: IconType } = {
  react: FaReact,
  node: FaNodeJs,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  typescript: SiTypescript,
  csharp: SiCsharp,
  python: FaPython,
  sql: FaDatabase,
  git: FaGitAlt,
  redux: SiRedux,
  mysql: SiMysql,
  mariadb: SiMariadb,
  sqlite: SiSqlite,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  dynamodb: SiAmazondynamodb,
  ec2: FaAws,
  express: SiExpress,
  go: SiGo,
  c: SiC,
  cpp: SiCplusplus,
  dotnet: SiDotnet,
  linux: FaLinux,
  windows: FaWindows,
  java: FaJava,
  tailwind: SiTailwindcss,
  azure: SiMicrosoftazure,
  digitalocean: FaDigitalOcean
};

export const mapNameToIcon = (name: string): IconType => {
  return iconMappings[name];
};
