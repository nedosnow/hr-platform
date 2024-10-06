import { FC, ReactNode } from "react";
import { FormWrapper } from "./form.style";

interface FormProps {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children }) => (
  <FormWrapper>{children}</FormWrapper>
);

export default Form;
