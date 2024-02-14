import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards";
import Header from "layouts/components/Header";

function Overview() {
  const certificates = {
    'ETIQUETA Y PROTOCOLO, SERVICIO Y ATENCION AL CLIENTE': "CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL)",
    'MARKETING DIGITAL': 'CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL)',
    'OFIMATICA EMPRESARIAL Y DE GESTION ': 'CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL)',
    'INFORMATICA AVANZADA DE NIVEL 2': 'Idectsa(Centro de educacion para el trabajo y el desarrollo humano)',
  };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {Object.entries(certificates).map(([title, info]) => (
            <Grid item xs={12} md={6} xl={4} key={title}>
              <ProfileInfoCard
                title={title}
                info={info}
              />
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
