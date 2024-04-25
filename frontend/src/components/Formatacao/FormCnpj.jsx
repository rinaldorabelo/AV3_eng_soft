import {patternFormatter} from "react-number-format";

export const FormCnpj = () => {
  return (
    <>
      <pa format="+1 (###) #### ###" allowEmptyFormatting mask="_" />
      ;
    </>
  );
};
