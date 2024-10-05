import { FC, memo } from "react";

interface ProfileCardProps {
  name: string;
  position: string;
  email: string;
  location: string;
  birthDate: string;
  status: string;
}

const ProfileCard: FC<ProfileCardProps> = () => {
  return null;
};

export default memo(ProfileCard);
