import Typography from "@mui/material/Typography";
import { FC, memo } from "react";
import icon from "@/assets/earth-svgrepo-com.svg";
import { HeaderLogoIcon } from "./header-logo.style";

const HeaderLogo: FC = () => (
  <>
    <HeaderLogoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
      <img src={icon} height={30} width={30} />
    </HeaderLogoIcon>

    <Typography variant="h6" noWrap mr={32}>
      SpaceTeam | HR platform
    </Typography>
  </>
);

export default memo(HeaderLogo);
