import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards";
import Header from "layouts/components/Header";
import htmlImage from "../../layouts/habilities/img/html.png";
import cssImage from "../../layouts/habilities/img/css.png";
import jsImage from "../../layouts/habilities/img/js.jpg";
import reactImage from "../../layouts/habilities/img/react.png";
import vueImage from "../../layouts/habilities/img/vue.jpg";
import mysqlImage from "../../layouts/habilities/img/mysql.png";
import phpImage from "../../layouts/habilities/img/php.png";

function Overview() {
  const certificates = {
    Html: { level: "Basico", image: htmlImage },
    Css: { level: "Basico", image: cssImage },
    Javascript: { level: "Basico", image: jsImage },
    React: { level: "Basico", image: reactImage },
    Vue: { level: "Basico", image: vueImage },
    Mysql: { level: "Basico", image: mysqlImage },
    PHP: { level: "Basico", image: phpImage },
  };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {Object.entries(certificates).map(([title, { level, image }]) => (
            <Grid item xs={12} md={6} xl={4} key={title}>
              <ProfileInfoCard
                title={title}
                info={level}
                img={image}
              />
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
