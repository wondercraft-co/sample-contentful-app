import { FieldExtensionSDK } from "@contentful/app-sdk";
import { useFieldValue, useSDK } from "@contentful/react-apps-toolkit";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useEffect } from "react";
import Editor from "react-simple-code-editor";
// import CodeMirror from "@uiw/react-codemirror";
// import { css } from "@codemirror/lang-css";

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

  //   useEffect(() => {
  //     if (!sdk.field.getValue()) {
  //       const now = formatMachineReadableDateTime(new Date());
  //       console.log(now);
  //       sdk.field.setValue(now);
  //     }
  //   }, [sdk.field]);

  return (
    <>
      <Editor
        value={fieldValue || ""}
        onValueChange={(code) => setFieldValue(code)}
        highlight={(code) => highlight(code, languages.css, "css")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: "1px solid #CFD9E0",
          borderRadius: 6,
        }}
      />
      <hr />
      {/* <CodeMirror
        value={fieldValue || ""}
        height="200px"
        // extensions={[css()]}
        onChange={(value) => setFieldValue(value)}
      /> */}
    </>
  );
};

export default DateField;
