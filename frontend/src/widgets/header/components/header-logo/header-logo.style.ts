import styled from "@emotion/styled";
import Icon from "@mui/material/Icon";

export const HeaderLogoIcon = styled(Icon)`
  height: 32px;
  animation: spin 2s;
  padding-right: 10px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    25% {
      scale: 150%;
    }
    50% {
      scale: 200%;
    }
    75% {
      scale: 1050%;
    }
    100% {
      scale: 100%;
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
