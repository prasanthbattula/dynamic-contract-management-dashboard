import DropdownController from "./Controllers/DropdownController";
import InputController from "./Controllers/InputController";
import { FormFieldConfig } from "./FormTypesAndConstants";

const ControllerMap = (props: FormFieldConfig) => {
  const { controlType: T } = props;
  switch (T) {
    case "dropdown":
      return <DropdownController {...props} />;
    default:
      return <InputController {...props} />;
  }
};

export default ControllerMap;
