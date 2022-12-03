import { FieldExtensionSDK } from "@contentful/app-sdk";
import {
  formatMachineReadableDateTime,
  Paragraph,
} from "@contentful/f36-components";
import { useCMA, useSDK } from "@contentful/react-apps-toolkit";
import { DateEditor } from "@contentful/field-editor-date";
import { useEffect } from "react";

const DateField = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  console.log(sdk.field);
  //   const cma = useCMA();

  useEffect(() => {
    sdk.window.startAutoResizer();
    return () => {
      sdk.window.stopAutoResizer();
    };
  }, [sdk.window]);

  useEffect(() => {
    if (!sdk.field.getValue()) {
      const now = formatMachineReadableDateTime(new Date());
      console.log(now);
      sdk.field.setValue(now);
    }
  }, [sdk.field]);
  return (
    <>
      <Paragraph>This is the date field</Paragraph>
      <DateEditor field={sdk.field} />
    </>
  );
};

export default DateField;
