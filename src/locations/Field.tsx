import { FieldExtensionSDK } from "@contentful/app-sdk";
import { useSDK } from "@contentful/react-apps-toolkit";
import DateField from "../components/DateField";
import TagsField from "../components/TagsField";
import CodeField from "../components/CodeField";
import FaqField from "../components/FaqField";

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  // console.log(sdk.field.type, "field type");
  if (sdk.field.type === "Symbol") {
    return <TagsField />;
  } else if (sdk.field.type === "Date") {
    return <DateField />;
  } else if (sdk.field.type === "Text") {
    return <CodeField />;
  } else if (sdk.field.type === "Object") {
    return <FaqField />;
  } else {
    return <>Nop</>;
  }
};

export default Field;
