import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ProfileInfoCard({ title, description, info, action, img }) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox mb={2} lineHeight={1}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <center>
              {description}
            </center>
          </SoftTypography>
        </SoftBox>
        <SoftBox opacity={0.3}>
          <Divider />
        </SoftBox>
        <SoftBox display="flex" py={1} pr={2}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            <center>
              {info}
            </center>
          </SoftTypography>
        </SoftBox>
        {img && ( 
          <SoftBox display="flex" py={1} pr={2}>
            <img src={img} alt="Certificate" style={{ maxWidth: "100%", height: "auto" }} />
          </SoftBox>
        )}
        <SoftBox display="flex" py={3} pr={6}>
          <SoftTypography variant="button" fontWeight="bold" textTransform="capitalize">
             &nbsp;
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

ProfileInfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.string,
  action: PropTypes.shape({
    route: PropTypes.string,
    tooltip: PropTypes.string,
  }).isRequired,
  img: PropTypes.string,
};

export default ProfileInfoCard;
