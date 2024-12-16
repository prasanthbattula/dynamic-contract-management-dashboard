import { Fragment } from "react/jsx-runtime";
import ControllerMap from "./ControllerMap";
import { FormFieldConfig } from "./FormTypesAndConstants";

interface IFormGenerator {
  configForm: Array<FormFieldConfig>;
}

export const FormGenerator = (props: IFormGenerator) => {
  const { configForm } = props;

  return (
    <>
      {configForm.map((field: FormFieldConfig) => {
        return (
          <Fragment key={field.name}>
            <ControllerMap {...field} />
          </Fragment>
        );
      })}
    </>
  );
};
