import Typography from "@mui/material/Typography";
import { FC, memo } from "react";
import icon from "@/assets/earth-svgrepo-com.svg";
import { HeaderLogoIcon } from "./header-logo.style";

const HeaderLogo: FC = () => (
  <>
    <HeaderLogoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
      <img src={icon} height={30} width={30} />
    </HeaderLogoIcon>

    <Typography
      variant="h6"
      noWrap
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      SpaceTeam | HR platform
    </Typography>
  </>
);

export default memo(HeaderLogo);
