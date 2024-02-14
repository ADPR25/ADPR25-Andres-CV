import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards/profile";
import Header from "layouts/components/Header";
import { GitHub } from "@mui/icons-material";
import { Whatsapp } from "layouts/components/icon/icon";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} xl={12}>
            <ProfileInfoCard
              title="Informacion personal"
              description="¡Hola! Soy Andrés, un programador de software en crecimiento. He completado mi etapa de estudios en el Sena y cuento con diversos conocimientos en desarrollo de páginas web y aplicaciones para Android. Estoy dispuesto a seguir aprendiendo y trabajando en esta apasionante industria."
              info={{
                'Nombre completo': "Andres David Perez Rios",
                Telefono: "(+57) 3042413350",
                Gmail: "andresperezrios090@gmail.com",
                Locacion: "COLOMBIA/CORDIBA/MONTERIA",
              }}
              social={[
                {
                  link: "https://github.com/ADPR25",
                  icon: <GitHub />,
                  color: "github",
                },
                {
                  link: "https://wa.link/jirotw",
                  icon: <Whatsapp />,
                  color: "instagram",
                }
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
