import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Stack, Paragraph } from "@contentful/f36-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";
import { useCMA, useFieldValue, useSDK } from "@contentful/react-apps-toolkit";
import { useAsync } from "react-async-hook";

const TagsField = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  const cma = useCMA();
//   console.log(sdk.field, "sdk");
  const [fieldValue, setFieldValue] = useFieldValue<string>();
  const [filteredItems, setFilteredItems] = useState<string[]>();

  const { result } = useAsync(cma.tag.getMany, {} as any);
  const tagNames = useMemo(
    () => result?.items.map((tag) => tag.name),
    [result]
  );

  useEffect(() => {
    sdk.window.updateHeight(400);
  }, [sdk.window]);

  // useEffect(() => {
  //   sdk.window.startAutoResizer();
  // });

  useEffect(() => {
    if (tagNames?.length) {
      setFilteredItems(tagNames);
    }
  }, [tagNames]);

  const handleInputValueChange = (value: any) => {
    if (tagNames) {
      const newFilteredItems = tagNames.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  };

  const handleSelectItem = (item: any) => {
    setFieldValue(item);
  };

  return (
    <>
      <Paragraph>Hello Entry Field Component (AppId: {sdk.ids.app})</Paragraph>

      {filteredItems && (
        <Stack flexDirection="column" padding="spacingS" alignItems="start">
          <Autocomplete
            items={filteredItems}
            onInputValueChange={handleInputValueChange}
            onSelectItem={handleSelectItem}
            defaultValue={fieldValue || ""}
          />

          <Paragraph>
            Selected space: <b>{fieldValue}</b>
          </Paragraph>
        </Stack>
      )}
    </>
  );
};

export default TagsField;
