import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
  pages: Record<
    string,
    {
      name: string;
      path: string;
    }
  >;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ pages = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {Object.values(pages).map(({ name, path }) => (
        <Button
          key={name}
          onClick={handleNavigate(path)}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {name}
        </Button>
      ))}
    </Box>
  );
};

export default memo(HeaderMenu);
