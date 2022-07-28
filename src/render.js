import React from "react";
import reconciler from "react-reconciler";
import { hostConfig } from "./host-config";
// import { ArrayNode, JsonType, toJSON } from "./json";

/** Render the React tree into a JSON object. */
export const render = (root) => {
  const renderer = reconciler(hostConfig);
  const container = { children: [] };

  const reactContainer = renderer.createContainer(container, 0, false, null);
  renderer.updateContainer(root, reactContainer, null, () => {});

  // renderer.flushPassiveEffects();
  // renderer.flushDiscreteUpdates();

  return {
    log_id: "card_type",
    states: [
      {
        state_id: 0,
        div: container.children[0],
      },
    ],
  };
};
