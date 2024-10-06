import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { ChangeEvent, FC, memo, useState } from "react";

interface AvatarFieldProps {
  src?: string;
  onUpload?: () => void;
}

const AvatarField: FC<AvatarFieldProps> = ({ src = "", onUpload }) => {
  const [fileSrc, setFileSrc] = useState<string>(src);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    setFileSrc(URL.createObjectURL(file));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Avatar src={fileSrc} sx={{ width: 96, height: 96 }} />
      <Button
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        {fileSrc ? "Изменить фото" : "Загрузить фото"}
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileUpload}
          hidden
        />
      </Button>
    </Box>
  );
};

export default memo(AvatarField);
