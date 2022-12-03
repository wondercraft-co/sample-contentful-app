import React, { useCallback } from "react";
import { Paragraph } from "@contentful/f36-components";
import { HomeExtensionSDK } from "@contentful/app-sdk";
import { useCMA, useSDK } from "@contentful/react-apps-toolkit";

const Home = () => {
  const sdk = useSDK<HomeExtensionSDK>();

  const cma = useCMA();
  const getSpace = useCallback(async () => {
    return await cma.space.get({});
  }, [cma]);

  // const { result } = useAsync(getSpace, []);
  getSpace().then((r) => console.log(r));
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return <Paragraph>Hello Home Component (AppId: {sdk.ids.app})</Paragraph>;
};

export default Home;
