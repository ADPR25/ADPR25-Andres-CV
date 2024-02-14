import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers";
import ProfileInfoCard from "examples/Cards";
import Header from "layouts/components/Header";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} xl={12}>
            <ProfileInfoCard
              title="Estudios"
              info={{
                'ETIQUETA Y PROTOCOLO, SERVICIO Y ATENCION AL CLIENTE': "CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL) Julio 2016/ Seminario de 6 horas",
                'MARKETING DIGITAL':'CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL) Julio 2016/ Seminario de 6 horas',
                'OFIMATICA EMPRESARIAL Y DE GESTION ': 'CEIS(CORPORACION PARA EL EMPRENDIMIENTO Y LA INNOVACION SOCIAL) Julio 2016/ con una duracion de 150 horas',
                'INFORMATICA AVANZADA DE NIVEL 2': 'Idectsa(Centro de educacion para el trabajo y el desarrollo humano) Julio 2017/ con una duracion de 80 horas',
                'INSTITUCION EDUCATIVA RANCHO GRANDE':'Bachillerato academico/ Febrero 2016 - Diciembre 2021',
                'INSTITUCION EDUCATIVA RANCHO GRANDE SEDE MIRAFLORES':'Primaria academica/ Febrero 2009 - Diciembre 2015'
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
