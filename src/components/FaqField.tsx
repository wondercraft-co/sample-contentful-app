import { FieldExtensionSDK } from "@contentful/app-sdk";
import { Paragraph } from "@contentful/f36-components";
import { useFieldValue, useSDK } from "@contentful/react-apps-toolkit";
import { useEffect } from "react";
// import "codemirror/lib/codemirror.css";
import { MarkdownEditor } from "@contentful/field-editor-markdown";

const DateField = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  console.log(sdk.field);
  //   const cma = useCMA();

  const [fieldValue, setFieldValue] = useFieldValue<string>();

  useEffect(() => {
    sdk.window.startAutoResizer();
    return () => {
      sdk.window.stopAutoResizer();
    };
  }, [sdk.window]);

  console.log(fieldValue);

  return (
    <>
      <Paragraph>Faq</Paragraph>
      <MarkdownEditor sdk={sdk} isInitiallyDisabled={false}  />
    </>
  );
};

export default DateField;
