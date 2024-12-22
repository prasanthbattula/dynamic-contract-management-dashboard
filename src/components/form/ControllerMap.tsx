import CheckboxController from "./Controllers/CheckboxController";
import DatePickerController from "./Controllers/DatePickerController";
import DropdownController from "./Controllers/DropdownController";
import InputController from "./Controllers/InputController";
import { FormFieldConfig } from "./FormTypesAndConstants";

const ControllerMap = (props: FormFieldConfig) => {
  const { controlType: T } = props;
  switch (T) {
    case "dropdown":
      return <DropdownController {...props} />;
    case "date":
      return <DatePickerController {...props} />;
    case "checkbox":
      return <CheckboxController {...props} />;
    default:
      return <InputController {...props} />;
  }
};

export default ControllerMap;
