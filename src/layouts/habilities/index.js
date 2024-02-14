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
              title="Habilidades"
              info={{
                'Html': "Basico",
                'Css': "Basico",
                'Javascript': "Basico",
                'React': "Basico",
                'Vue': "Basico",
                'Mysql': "Basico",
                'PHP': "Basico"
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
