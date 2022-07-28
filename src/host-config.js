// import { HostConfig } from "react-reconciler";
// import {
//   ArrayNode,
//   JsonNode,
//   ObjectNode,
//   PropertyNode,
//   ValueNode,
// } from "./json";
// import { JsonElements } from "./types";

// https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L400
/** Throw an error in the next tick */
function handleErrorInNextTick(error) {
  setTimeout(() => {
    throw error;
  });
}

export const hostConfig = {
  supportsMutation: true,
  supportsPersistence: false,

  createInstance: (type, props) => {
    if (type === "div-text") {
      return { type: "text", text: props.children };
    }

    return {};
  },
  appendInitialChild: (parent, child) => {
    parent.children.push(child);
  },
  appendChildToContainer: (container, child) => {
    container.children.push(child);
  },

  clearContainer: () => {},

  // prepareUpdate: () => null,

  // Возможно нужно true
  shouldSetTextContent: () => true,

  finalizeContainerChildren: () => false,

  getRootHostContext() {},
  getChildHostContext() {},
  finalizeInitialChildren() {
    return false;
  },

  getPublicInstance: (instance) => instance,
  prepareForCommit() {},
  resetAfterCommit() {},
  // commitMount() {},

  // now: () => Date.now(),
  // scheduleTimeout: setTimeout,
  // cancelTimeout: clearTimeout,
  // noTimeout: -1,
  // queueMicrotask: (callback) =>
  //   Promise.resolve(null).then(callback).catch(handleErrorInNextTick),
  isPrimaryRenderer: true,
  supportsHydration: false,
};
