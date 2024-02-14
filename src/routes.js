import Profile from "layouts/profile";
import Certificados from "layouts/Certificates/index";
import Studed from "layouts/studed";
import Habilities from "layouts/habilities";
import Certificado from "img/certificado";
import Estudios from "img/estudios";
import PersonalInfoIcon from "img/informacion";
import SkillsIcon from "img/habilidades";

const routes = [
  {
    type: "collapse",
    name: "Informacion personal",
    key: "profile",
    route: "/profile",
    icon: <PersonalInfoIcon size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Estudios",
    key: "studed",
    route: "/studed",
    icon: <Estudios size="12px" />,
    component: <Studed />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Certificados",
    key: "certificates",
    route: "/certificates",
    icon: <Certificado size="12px" />,
    component: <Certificados />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Habilidades",
    key: "skills",
    route: "/skills",
    icon: <SkillsIcon size="12px" />,
    component: <Habilities />,
    noCollapse: true,
  }
];

export default routes;
