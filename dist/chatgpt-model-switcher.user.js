// ==UserScript==
// @name               ChatGPT Model Switcher (Supports GPT-4 Mobile and All Available Models)
// @name:zh-CN         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @name:zh-TW         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @namespace          https://github.com/hydrotho/ChatGPT_Model_Switcher
// @version            2.0.2
// @author             Hydrotho
// @description        Use the GPT-4 Mobile model on the ChatGPT web interface. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.
// @description:zh-CN  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @description:zh-TW  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @license            MIT
// @copyright          2023, Hydrotho (https://github.com/hydrotho)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @supportURL         https://github.com/hydrotho/ChatGPT_Model_Switcher/issues
// @downloadURL        https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js
// @updateURL          https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js
// @match              http*://chat.openai.com/*
// @require            https://cdn.jsdelivr.net/npm/vue@3.3.13/dist/vue.global.prod.js
// @grant              none
// ==/UserScript==

(function (vue) {
  'use strict';

  function match(value, lookup, ...args) {
    if (value in lookup) {
      let returnValue = lookup[value];
      return typeof returnValue === "function" ? returnValue(...args) : returnValue;
    }
    let error = new Error(
      `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      lookup
    ).map((key) => `"${key}"`).join(", ")}.`
    );
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, match);
    throw error;
  }
  var Features$1 = /* @__PURE__ */ ((Features2) => {
    Features2[Features2["None"] = 0] = "None";
    Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
    Features2[Features2["Static"] = 2] = "Static";
    return Features2;
  })(Features$1 || {});
  function render({
    visible = true,
    features = 0,
    ourProps,
    theirProps,
    ...main
  }) {
    var _a;
    let props = mergeProps(theirProps, ourProps);
    let mainWithProps = Object.assign(main, { props });
    if (visible)
      return _render(mainWithProps);
    if (features & 2) {
      if (props.static)
        return _render(mainWithProps);
    }
    if (features & 1) {
      let strategy = ((_a = props.unmount) != null ? _a : true) ? 0 : 1;
      return match(strategy, {
        [
          0
          /* Unmount */
        ]() {
          return null;
        },
        [
          1
          /* Hidden */
        ]() {
          return _render({
            ...main,
            props: { ...props, hidden: true, style: { display: "none" } }
          });
        }
      });
    }
    return _render(mainWithProps);
  }
  function _render({
    props,
    attrs,
    slots,
    slot,
    name
  }) {
    var _a, _b;
    let { as, ...incomingProps } = omit(props, ["unmount", "static"]);
    let children = (_a = slots.default) == null ? void 0 : _a.call(slots, slot);
    let dataAttributes = {};
    if (slot) {
      let exposeState = false;
      let states = [];
      for (let [k, v] of Object.entries(slot)) {
        if (typeof v === "boolean") {
          exposeState = true;
        }
        if (v === true) {
          states.push(k);
        }
      }
      if (exposeState)
        dataAttributes[`data-headlessui-state`] = states.join(" ");
    }
    if (as === "template") {
      children = flattenFragments(children != null ? children : []);
      if (Object.keys(incomingProps).length > 0 || Object.keys(attrs).length > 0) {
        let [firstChild, ...other] = children != null ? children : [];
        if (!isValidElement(firstChild) || other.length > 0) {
          throw new Error(
            [
              'Passing props on "template"!',
              "",
              `The current component <${name} /> is rendering a "template".`,
              `However we need to passthrough the following props:`,
              Object.keys(incomingProps).concat(Object.keys(attrs)).map((name2) => name2.trim()).filter((current, idx, all) => all.indexOf(current) === idx).sort((a, z) => a.localeCompare(z)).map((line) => `  - ${line}`).join("\n"),
              "",
              "You can apply a few solutions:",
              [
                'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                "Render a single element as the child so that we can forward the props onto that element."
              ].map((line) => `  - ${line}`).join("\n")
            ].join("\n")
          );
        }
        let mergedProps = mergeProps((_b = firstChild.props) != null ? _b : {}, incomingProps);
        let cloned = vue.cloneVNode(firstChild, mergedProps);
        for (let prop in mergedProps) {
          if (prop.startsWith("on")) {
            cloned.props || (cloned.props = {});
            cloned.props[prop] = mergedProps[prop];
          }
        }
        return cloned;
      }
      if (Array.isArray(children) && children.length === 1) {
        return children[0];
      }
      return children;
    }
    return vue.h(as, Object.assign({}, incomingProps, dataAttributes), {
      default: () => children
    });
  }
  function flattenFragments(children) {
    return children.flatMap((child) => {
      if (child.type === vue.Fragment) {
        return flattenFragments(child.children);
      }
      return [child];
    });
  }
  function mergeProps(...listOfProps) {
    var _a;
    if (listOfProps.length === 0)
      return {};
    if (listOfProps.length === 1)
      return listOfProps[0];
    let target = {};
    let eventHandlers = {};
    for (let props of listOfProps) {
      for (let prop in props) {
        if (prop.startsWith("on") && typeof props[prop] === "function") {
          (_a = eventHandlers[prop]) != null ? _a : eventHandlers[prop] = [];
          eventHandlers[prop].push(props[prop]);
        } else {
          target[prop] = props[prop];
        }
      }
    }
    if (target.disabled || target["aria-disabled"]) {
      return Object.assign(
        target,
        // Set all event listeners that we collected to `undefined`. This is
        // important because of the `cloneElement` from above, which merges the
        // existing and new props, they don't just override therefore we have to
        // explicitly nullify them.
        Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [eventName, void 0]))
      );
    }
    for (let eventName in eventHandlers) {
      Object.assign(target, {
        [eventName](event, ...args) {
          let handlers = eventHandlers[eventName];
          for (let handler of handlers) {
            if (event instanceof Event && event.defaultPrevented) {
              return;
            }
            handler(event, ...args);
          }
        }
      });
    }
    return target;
  }
  function compact(object) {
    let clone = Object.assign({}, object);
    for (let key in clone) {
      if (clone[key] === void 0)
        delete clone[key];
    }
    return clone;
  }
  function omit(object, keysToOmit = []) {
    let clone = Object.assign({}, object);
    for (let key of keysToOmit) {
      if (key in clone)
        delete clone[key];
    }
    return clone;
  }
  function isValidElement(input) {
    if (input == null)
      return false;
    if (typeof input.type === "string")
      return true;
    if (typeof input.type === "object")
      return true;
    if (typeof input.type === "function")
      return true;
    return false;
  }
  let id = 0;
  function generateId() {
    return ++id;
  }
  function useId() {
    return generateId();
  }
  var Keys = /* @__PURE__ */ ((Keys2) => {
    Keys2["Space"] = " ";
    Keys2["Enter"] = "Enter";
    Keys2["Escape"] = "Escape";
    Keys2["Backspace"] = "Backspace";
    Keys2["Delete"] = "Delete";
    Keys2["ArrowLeft"] = "ArrowLeft";
    Keys2["ArrowUp"] = "ArrowUp";
    Keys2["ArrowRight"] = "ArrowRight";
    Keys2["ArrowDown"] = "ArrowDown";
    Keys2["Home"] = "Home";
    Keys2["End"] = "End";
    Keys2["PageUp"] = "PageUp";
    Keys2["PageDown"] = "PageDown";
    Keys2["Tab"] = "Tab";
    return Keys2;
  })(Keys || {});
  function dom(ref2) {
    var _a;
    if (ref2 == null)
      return null;
    if (ref2.value == null)
      return null;
    return (_a = ref2.value.$el) != null ? _a : ref2.value;
  }
  let Context = Symbol("Context");
  var State = /* @__PURE__ */ ((State2) => {
    State2[State2["Open"] = 1] = "Open";
    State2[State2["Closed"] = 2] = "Closed";
    State2[State2["Closing"] = 4] = "Closing";
    State2[State2["Opening"] = 8] = "Opening";
    return State2;
  })(State || {});
  function useOpenClosed() {
    return vue.inject(Context, null);
  }
  function useOpenClosedProvider(value) {
    vue.provide(Context, value);
  }
  function resolveType(type, as) {
    if (type)
      return type;
    let tag = as != null ? as : "button";
    if (typeof tag === "string" && tag.toLowerCase() === "button")
      return "button";
    return void 0;
  }
  function useResolveButtonType(data, refElement) {
    let type = vue.ref(resolveType(data.value.type, data.value.as));
    vue.onMounted(() => {
      type.value = resolveType(data.value.type, data.value.as);
    });
    vue.watchEffect(() => {
      var _a;
      if (type.value)
        return;
      if (!dom(refElement))
        return;
      if (dom(refElement) instanceof HTMLButtonElement && !((_a = dom(refElement)) == null ? void 0 : _a.hasAttribute("type"))) {
        type.value = "button";
      }
    });
    return type;
  }
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  class Env {
    constructor() {
      __publicField(this, "current", this.detect());
      __publicField(this, "currentId", 0);
    }
    set(env2) {
      if (this.current === env2)
        return;
      this.currentId = 0;
      this.current = env2;
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      if (typeof window === "undefined" || typeof document === "undefined") {
        return "server";
      }
      return "client";
    }
  }
  let env = new Env();
  function getOwnerDocument(element) {
    if (env.isServer)
      return null;
    if (element instanceof Node)
      return element.ownerDocument;
    if (element == null ? void 0 : element.hasOwnProperty("value")) {
      let domElement = dom(element);
      if (domElement)
        return domElement.ownerDocument;
    }
    return document;
  }
  let focusableSelector = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])"
  ].map(
    (selector) => `${selector}:not([tabindex='-1'])`
  ).join(",");
  var Focus = /* @__PURE__ */ ((Focus2) => {
    Focus2[Focus2["First"] = 1] = "First";
    Focus2[Focus2["Previous"] = 2] = "Previous";
    Focus2[Focus2["Next"] = 4] = "Next";
    Focus2[Focus2["Last"] = 8] = "Last";
    Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
    Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
    return Focus2;
  })(Focus || {});
  var FocusResult = /* @__PURE__ */ ((FocusResult2) => {
    FocusResult2[FocusResult2["Error"] = 0] = "Error";
    FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
    FocusResult2[FocusResult2["Success"] = 2] = "Success";
    FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
    return FocusResult2;
  })(FocusResult || {});
  function getFocusableElements(container = document.body) {
    if (container == null)
      return [];
    return Array.from(container.querySelectorAll(focusableSelector)).sort(
      // We want to move `:tabindex="0"` to the end of the list, this is what the browser does as well.
      (a, z) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (z.tabIndex || Number.MAX_SAFE_INTEGER))
    );
  }
  var FocusableMode = /* @__PURE__ */ ((FocusableMode2) => {
    FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
    FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
    return FocusableMode2;
  })(FocusableMode || {});
  function isFocusableElement(element, mode = 0) {
    var _a;
    if (element === ((_a = getOwnerDocument(element)) == null ? void 0 : _a.body))
      return false;
    return match(mode, {
      [
        0
        /* Strict */
      ]() {
        return element.matches(focusableSelector);
      },
      [
        1
        /* Loose */
      ]() {
        let next = element;
        while (next !== null) {
          if (next.matches(focusableSelector))
            return true;
          next = next.parentElement;
        }
        return false;
      }
    });
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.metaKey || event.altKey || event.ctrlKey) {
          return;
        }
        document.documentElement.dataset.headlessuiFocusVisible = "";
      },
      true
    );
    document.addEventListener(
      "click",
      (event) => {
        if (event.detail === 1) {
          delete document.documentElement.dataset.headlessuiFocusVisible;
        } else if (event.detail === 0) {
          document.documentElement.dataset.headlessuiFocusVisible = "";
        }
      },
      true
    );
  }
  let selectableSelector = ["textarea", "input"].join(",");
  function isSelectableElement(element) {
    var _a, _b;
    return (_b = (_a = element == null ? void 0 : element.matches) == null ? void 0 : _a.call(element, selectableSelector)) != null ? _b : false;
  }
  function sortByDomNode(nodes, resolveKey = (i) => i) {
    return nodes.slice().sort((aItem, zItem) => {
      let a = resolveKey(aItem);
      let z = resolveKey(zItem);
      if (a === null || z === null)
        return 0;
      let position = a.compareDocumentPosition(z);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING)
        return -1;
      if (position & Node.DOCUMENT_POSITION_PRECEDING)
        return 1;
      return 0;
    });
  }
  function focusIn(container, focus, {
    sorted = true,
    relativeTo = null,
    skipElements = []
  } = {}) {
    var _a;
    let ownerDocument = (_a = Array.isArray(container) ? container.length > 0 ? container[0].ownerDocument : document : container == null ? void 0 : container.ownerDocument) != null ? _a : document;
    let elements = Array.isArray(container) ? sorted ? sortByDomNode(container) : container : getFocusableElements(container);
    if (skipElements.length > 0 && elements.length > 1) {
      elements = elements.filter((x) => !skipElements.includes(x));
    }
    relativeTo = relativeTo != null ? relativeTo : ownerDocument.activeElement;
    let direction = (() => {
      if (focus & (1 | 4))
        return 1;
      if (focus & (2 | 8))
        return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })();
    let startIndex = (() => {
      if (focus & 1)
        return 0;
      if (focus & 2)
        return Math.max(0, elements.indexOf(relativeTo)) - 1;
      if (focus & 4)
        return Math.max(0, elements.indexOf(relativeTo)) + 1;
      if (focus & 8)
        return elements.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })();
    let focusOptions = focus & 32 ? { preventScroll: true } : {};
    let offset = 0;
    let total = elements.length;
    let next = void 0;
    do {
      if (offset >= total || offset + total <= 0)
        return 0;
      let nextIdx = startIndex + offset;
      if (focus & 16) {
        nextIdx = (nextIdx + total) % total;
      } else {
        if (nextIdx < 0)
          return 3;
        if (nextIdx >= total)
          return 1;
      }
      next = elements[nextIdx];
      next == null ? void 0 : next.focus(focusOptions);
      offset += direction;
    } while (next !== ownerDocument.activeElement);
    if (focus & (4 | 2) && isSelectableElement(next)) {
      next.select();
    }
    return 2;
  }
  function useDocumentEvent(type, listener, options) {
    if (env.isServer)
      return;
    vue.watchEffect((onInvalidate) => {
      document.addEventListener(type, listener, options);
      onInvalidate(() => document.removeEventListener(type, listener, options));
    });
  }
  function useWindowEvent(type, listener, options) {
    if (env.isServer)
      return;
    vue.watchEffect((onInvalidate) => {
      window.addEventListener(type, listener, options);
      onInvalidate(() => window.removeEventListener(type, listener, options));
    });
  }
  function useOutsideClick(containers, cb, enabled = vue.computed(() => true)) {
    function handleOutsideClick(event, resolveTarget) {
      if (!enabled.value)
        return;
      if (event.defaultPrevented)
        return;
      let target = resolveTarget(event);
      if (target === null) {
        return;
      }
      if (!target.getRootNode().contains(target))
        return;
      let _containers = function resolve(containers2) {
        if (typeof containers2 === "function") {
          return resolve(containers2());
        }
        if (Array.isArray(containers2)) {
          return containers2;
        }
        if (containers2 instanceof Set) {
          return containers2;
        }
        return [containers2];
      }(containers);
      for (let container of _containers) {
        if (container === null)
          continue;
        let domNode = container instanceof HTMLElement ? container : dom(container);
        if (domNode == null ? void 0 : domNode.contains(target)) {
          return;
        }
        if (event.composed && event.composedPath().includes(domNode)) {
          return;
        }
      }
      if (
        // This check alllows us to know whether or not we clicked on a "focusable" element like a
        // button or an input. This is a backwards compatibility check so that you can open a <Menu
        // /> and click on another <Menu /> which should close Menu A and open Menu B. We might
        // revisit that so that you will require 2 clicks instead.
        !isFocusableElement(target, FocusableMode.Loose) && // This could be improved, but the `Combobox.Button` adds tabIndex={-1} to make it
        // unfocusable via the keyboard so that tabbing to the next item from the input doesn't
        // first go to the button.
        target.tabIndex !== -1
      ) {
        event.preventDefault();
      }
      return cb(event, target);
    }
    let initialClickTarget = vue.ref(null);
    useDocumentEvent(
      "pointerdown",
      (event) => {
        var _a, _b;
        if (enabled.value) {
          initialClickTarget.value = ((_b = (_a = event.composedPath) == null ? void 0 : _a.call(event)) == null ? void 0 : _b[0]) || event.target;
        }
      },
      true
    );
    useDocumentEvent(
      "mousedown",
      (event) => {
        var _a, _b;
        if (enabled.value) {
          initialClickTarget.value = ((_b = (_a = event.composedPath) == null ? void 0 : _a.call(event)) == null ? void 0 : _b[0]) || event.target;
        }
      },
      true
    );
    useDocumentEvent(
      "click",
      (event) => {
        if (!initialClickTarget.value) {
          return;
        }
        handleOutsideClick(event, () => {
          return initialClickTarget.value;
        });
        initialClickTarget.value = null;
      },
      // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
      // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
      // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
      // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
      true
    );
    useDocumentEvent(
      "touchend",
      (event) => {
        return handleOutsideClick(event, () => {
          if (event.target instanceof HTMLElement) {
            return event.target;
          }
          return null;
        });
      },
      // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
      // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
      // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
      // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
      true
    );
    useWindowEvent(
      "blur",
      (event) => {
        return handleOutsideClick(event, () => {
          return window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null;
        });
      },
      true
    );
  }
  var Features = /* @__PURE__ */ ((Features2) => {
    Features2[Features2["None"] = 1] = "None";
    Features2[Features2["Focusable"] = 2] = "Focusable";
    Features2[Features2["Hidden"] = 4] = "Hidden";
    return Features2;
  })(Features || {});
  let Hidden = vue.defineComponent({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: {
        type: Number,
        default: 1
        /* None */
      }
    },
    setup(props, { slots, attrs }) {
      return () => {
        let { features, ...theirProps } = props;
        let ourProps = {
          "aria-hidden": (features & 2) === 2 ? true : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(features & 4) === 4 && !((features & 2) === 2) && { display: "none" }
          }
        };
        return render({
          ourProps,
          theirProps,
          slot: {},
          attrs,
          slots,
          name: "Hidden"
        });
      };
    }
  });
  function attemptSubmit(elementInForm) {
    var _a, _b;
    let form = (_a = elementInForm == null ? void 0 : elementInForm.form) != null ? _a : elementInForm.closest("form");
    if (!form)
      return;
    for (let element of form.elements) {
      if (element === elementInForm)
        continue;
      if (element.tagName === "INPUT" && element.type === "submit" || element.tagName === "BUTTON" && element.type === "submit" || element.nodeName === "INPUT" && element.type === "image") {
        element.click();
        return;
      }
    }
    (_b = form.requestSubmit) == null ? void 0 : _b.call(form);
  }
  function useControllable(controlledValue, onChange, defaultValue) {
    let internalValue = vue.ref(defaultValue == null ? void 0 : defaultValue.value);
    let isControlled = vue.computed(() => controlledValue.value !== void 0);
    return [
      vue.computed(() => isControlled.value ? controlledValue.value : internalValue.value),
      function(value) {
        if (isControlled.value) {
          return onChange == null ? void 0 : onChange(value);
        } else {
          internalValue.value = value;
          return onChange == null ? void 0 : onChange(value);
        }
      }
    ];
  }
  var Direction = /* @__PURE__ */ ((Direction2) => {
    Direction2[Direction2["Forwards"] = 0] = "Forwards";
    Direction2[Direction2["Backwards"] = 1] = "Backwards";
    return Direction2;
  })(Direction || {});
  function useTabDirection() {
    let direction = vue.ref(
      0
      /* Forwards */
    );
    useWindowEvent("keydown", (event) => {
      if (event.key === "Tab") {
        direction.value = event.shiftKey ? 1 : 0;
      }
    });
    return direction;
  }
  function useEventListener(element, type, listener, options) {
    if (env.isServer)
      return;
    vue.watchEffect((onInvalidate) => {
      element = element != null ? element : window;
      element.addEventListener(type, listener, options);
      onInvalidate(() => element.removeEventListener(type, listener, options));
    });
  }
  let ForcePortalRootContext = Symbol("ForcePortalRootContext");
  function usePortalRoot() {
    return vue.inject(ForcePortalRootContext, false);
  }
  vue.defineComponent({
    name: "ForcePortalRoot",
    props: {
      as: { type: [Object, String], default: "template" },
      force: { type: Boolean, default: false }
    },
    setup(props, { slots, attrs }) {
      vue.provide(ForcePortalRootContext, props.force);
      return () => {
        let { force, ...theirProps } = props;
        return render({
          theirProps,
          ourProps: {},
          slot: {},
          slots,
          attrs,
          name: "ForcePortalRoot"
        });
      };
    }
  });
  function getPortalRoot(contextElement) {
    let ownerDocument = getOwnerDocument(contextElement);
    if (!ownerDocument) {
      if (contextElement === null) {
        return null;
      }
      throw new Error(
        `[Headless UI]: Cannot find ownerDocument for contextElement: ${contextElement}`
      );
    }
    let existingRoot = ownerDocument.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    let root = ownerDocument.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    return ownerDocument.body.appendChild(root);
  }
  vue.defineComponent({
    name: "Portal",
    props: {
      as: { type: [Object, String], default: "div" }
    },
    setup(props, { slots, attrs }) {
      let element = vue.ref(null);
      let ownerDocument = vue.computed(() => getOwnerDocument(element));
      let forcePortalRoot = usePortalRoot();
      let groupContext = vue.inject(PortalGroupContext, null);
      let myTarget = vue.ref(
        forcePortalRoot === true ? getPortalRoot(element.value) : groupContext == null ? getPortalRoot(element.value) : groupContext.resolveTarget()
      );
      vue.watchEffect(() => {
        if (forcePortalRoot)
          return;
        if (groupContext == null)
          return;
        myTarget.value = groupContext.resolveTarget();
      });
      let parent = vue.inject(PortalParentContext, null);
      vue.onMounted(() => {
        let domElement = dom(element);
        if (!domElement)
          return;
        if (!parent)
          return;
        vue.onUnmounted(parent.register(domElement));
      });
      vue.onUnmounted(() => {
        var _a, _b;
        let root = (_a = ownerDocument.value) == null ? void 0 : _a.getElementById("headlessui-portal-root");
        if (!root)
          return;
        if (myTarget.value !== root)
          return;
        if (myTarget.value.children.length <= 0) {
          (_b = myTarget.value.parentElement) == null ? void 0 : _b.removeChild(myTarget.value);
        }
      });
      return () => {
        if (myTarget.value === null)
          return null;
        let ourProps = {
          ref: element,
          "data-headlessui-portal": ""
        };
        return vue.h(
          // @ts-expect-error Children can be an object, but TypeScript is not happy
          // with it. Once this is fixed upstream we can remove this assertion.
          vue.Teleport,
          { to: myTarget.value },
          render({
            ourProps,
            theirProps: props,
            slot: {},
            attrs,
            slots,
            name: "Portal"
          })
        );
      };
    }
  });
  let PortalParentContext = Symbol("PortalParentContext");
  function useNestedPortals() {
    let parent = vue.inject(PortalParentContext, null);
    let portals = vue.ref([]);
    function register(portal) {
      portals.value.push(portal);
      if (parent)
        parent.register(portal);
      return () => unregister(portal);
    }
    function unregister(portal) {
      let idx = portals.value.indexOf(portal);
      if (idx !== -1)
        portals.value.splice(idx, 1);
      if (parent)
        parent.unregister(portal);
    }
    let api = {
      register,
      unregister,
      portals
    };
    return [
      portals,
      vue.defineComponent({
        name: "PortalWrapper",
        setup(_, { slots }) {
          vue.provide(PortalParentContext, api);
          return () => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots);
          };
        }
      })
    ];
  }
  let PortalGroupContext = Symbol("PortalGroupContext");
  vue.defineComponent({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null }
    },
    setup(props, { attrs, slots }) {
      let api = vue.reactive({
        resolveTarget() {
          return props.target;
        }
      });
      vue.provide(PortalGroupContext, api);
      return () => {
        let { target: _, ...theirProps } = props;
        return render({
          theirProps,
          ourProps: {},
          slot: {},
          attrs,
          slots,
          name: "PortalGroup"
        });
      };
    }
  });
  let DescriptionContext = Symbol("DescriptionContext");
  function useDescriptionContext() {
    let context = vue.inject(DescriptionContext, null);
    if (context === null) {
      throw new Error("Missing parent");
    }
    return context;
  }
  function useDescriptions({
    slot = vue.ref({}),
    name = "Description",
    props = {}
  } = {}) {
    let descriptionIds = vue.ref([]);
    function register(value) {
      descriptionIds.value.push(value);
      return () => {
        let idx = descriptionIds.value.indexOf(value);
        if (idx === -1)
          return;
        descriptionIds.value.splice(idx, 1);
      };
    }
    vue.provide(DescriptionContext, { register, slot, name, props });
    return vue.computed(
      () => descriptionIds.value.length > 0 ? descriptionIds.value.join(" ") : void 0
    );
  }
  vue.defineComponent({
    name: "Description",
    props: {
      as: { type: [Object, String], default: "p" },
      id: { type: String, default: () => `headlessui-description-${useId()}` }
    },
    setup(myProps, { attrs, slots }) {
      let context = useDescriptionContext();
      vue.onMounted(() => vue.onUnmounted(context.register(myProps.id)));
      return () => {
        let { name = "Description", slot = vue.ref({}), props = {} } = context;
        let { id: id2, ...theirProps } = myProps;
        let ourProps = {
          ...Object.entries(props).reduce(
            (acc, [key, value]) => Object.assign(acc, { [key]: vue.unref(value) }),
            {}
          ),
          id: id2
        };
        return render({
          ourProps,
          theirProps,
          slot: slot.value,
          attrs,
          slots,
          name
        });
      };
    }
  });
  function useRootContainers({
    defaultContainers = [],
    portals,
    mainTreeNodeRef: _mainTreeNodeRef
  } = {}) {
    let mainTreeNodeRef = vue.ref(null);
    let ownerDocument = getOwnerDocument(mainTreeNodeRef);
    function resolveContainers() {
      var _a;
      let containers = [];
      for (let container of defaultContainers) {
        if (container === null)
          continue;
        if (container instanceof HTMLElement) {
          containers.push(container);
        } else if ("value" in container && container.value instanceof HTMLElement) {
          containers.push(container.value);
        }
      }
      if (portals == null ? void 0 : portals.value) {
        for (let portal of portals.value) {
          containers.push(portal);
        }
      }
      for (let container of (_a = ownerDocument == null ? void 0 : ownerDocument.querySelectorAll("html > *, body > *")) != null ? _a : []) {
        if (container === document.body)
          continue;
        if (container === document.head)
          continue;
        if (!(container instanceof HTMLElement))
          continue;
        if (container.id === "headlessui-portal-root")
          continue;
        if (container.contains(dom(mainTreeNodeRef)))
          continue;
        if (containers.some((defaultContainer) => container.contains(defaultContainer)))
          continue;
        containers.push(container);
      }
      return containers;
    }
    return {
      resolveContainers,
      contains(element) {
        return resolveContainers().some((container) => container.contains(element));
      },
      mainTreeNodeRef,
      MainTreeNode() {
        if (_mainTreeNodeRef != null)
          return null;
        return vue.h(Hidden, { features: Features.Hidden, ref: mainTreeNodeRef });
      }
    };
  }
  function useMainTreeNode() {
    let mainTreeNodeRef = vue.ref(null);
    return {
      mainTreeNodeRef,
      MainTreeNode() {
        return vue.h(Hidden, { features: Features.Hidden, ref: mainTreeNodeRef });
      }
    };
  }
  let PopoverContext = Symbol("PopoverContext");
  function usePopoverContext(component) {
    let context = vue.inject(PopoverContext, null);
    if (context === null) {
      let err = new Error(`<${component} /> is missing a parent <${Popover.name} /> component.`);
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, usePopoverContext);
      throw err;
    }
    return context;
  }
  let PopoverGroupContext = Symbol("PopoverGroupContext");
  function usePopoverGroupContext() {
    return vue.inject(PopoverGroupContext, null);
  }
  let PopoverPanelContext = Symbol("PopoverPanelContext");
  function usePopoverPanelContext() {
    return vue.inject(PopoverPanelContext, null);
  }
  let Popover = vue.defineComponent({
    name: "Popover",
    inheritAttrs: false,
    props: {
      as: { type: [Object, String], default: "div" }
    },
    setup(props, { slots, attrs, expose }) {
      var _a;
      let internalPopoverRef = vue.ref(null);
      expose({ el: internalPopoverRef, $el: internalPopoverRef });
      let popoverState = vue.ref(
        1
        /* Closed */
      );
      let button = vue.ref(null);
      let beforePanelSentinel = vue.ref(null);
      let afterPanelSentinel = vue.ref(null);
      let panel = vue.ref(null);
      let ownerDocument = vue.computed(() => getOwnerDocument(internalPopoverRef));
      let isPortalled = vue.computed(() => {
        var _a2, _b;
        if (!dom(button))
          return false;
        if (!dom(panel))
          return false;
        for (let root2 of document.querySelectorAll("body > *")) {
          if (Number(root2 == null ? void 0 : root2.contains(dom(button))) ^ Number(root2 == null ? void 0 : root2.contains(dom(panel)))) {
            return true;
          }
        }
        let elements = getFocusableElements();
        let buttonIdx = elements.indexOf(dom(button));
        let beforeIdx = (buttonIdx + elements.length - 1) % elements.length;
        let afterIdx = (buttonIdx + 1) % elements.length;
        let beforeElement = elements[beforeIdx];
        let afterElement = elements[afterIdx];
        if (!((_a2 = dom(panel)) == null ? void 0 : _a2.contains(beforeElement)) && !((_b = dom(panel)) == null ? void 0 : _b.contains(afterElement))) {
          return true;
        }
        return false;
      });
      let api = {
        popoverState,
        buttonId: vue.ref(null),
        panelId: vue.ref(null),
        panel,
        button,
        isPortalled,
        beforePanelSentinel,
        afterPanelSentinel,
        togglePopover() {
          popoverState.value = match(popoverState.value, {
            [
              0
              /* Open */
            ]: 1,
            [
              1
              /* Closed */
            ]: 0
            /* Open */
          });
        },
        closePopover() {
          if (popoverState.value === 1)
            return;
          popoverState.value = 1;
        },
        close(focusableElement) {
          api.closePopover();
          let restoreElement = (() => {
            if (!focusableElement)
              return dom(api.button);
            if (focusableElement instanceof HTMLElement)
              return focusableElement;
            if (focusableElement.value instanceof HTMLElement)
              return dom(focusableElement);
            return dom(api.button);
          })();
          restoreElement == null ? void 0 : restoreElement.focus();
        }
      };
      vue.provide(PopoverContext, api);
      useOpenClosedProvider(
        vue.computed(
          () => match(popoverState.value, {
            [
              0
              /* Open */
            ]: State.Open,
            [
              1
              /* Closed */
            ]: State.Closed
          })
        )
      );
      let registerBag = {
        buttonId: api.buttonId,
        panelId: api.panelId,
        close() {
          api.closePopover();
        }
      };
      let groupContext = usePopoverGroupContext();
      let registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
      let [portals, PortalWrapper] = useNestedPortals();
      let root = useRootContainers({
        mainTreeNodeRef: groupContext == null ? void 0 : groupContext.mainTreeNodeRef,
        portals,
        defaultContainers: [button, panel]
      });
      function isFocusWithinPopoverGroup() {
        var _a2, _b, _c, _d;
        return (_d = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _d : ((_a2 = ownerDocument.value) == null ? void 0 : _a2.activeElement) && (((_b = dom(button)) == null ? void 0 : _b.contains(ownerDocument.value.activeElement)) || ((_c = dom(panel)) == null ? void 0 : _c.contains(ownerDocument.value.activeElement)));
      }
      vue.watchEffect(() => registerPopover == null ? void 0 : registerPopover(registerBag));
      useEventListener(
        (_a = ownerDocument.value) == null ? void 0 : _a.defaultView,
        "focus",
        (event) => {
          var _a2, _b;
          if (event.target === window)
            return;
          if (!(event.target instanceof HTMLElement))
            return;
          if (popoverState.value !== 0)
            return;
          if (isFocusWithinPopoverGroup())
            return;
          if (!button)
            return;
          if (!panel)
            return;
          if (root.contains(event.target))
            return;
          if ((_a2 = dom(api.beforePanelSentinel)) == null ? void 0 : _a2.contains(event.target))
            return;
          if ((_b = dom(api.afterPanelSentinel)) == null ? void 0 : _b.contains(event.target))
            return;
          api.closePopover();
        },
        true
      );
      useOutsideClick(
        root.resolveContainers,
        (event, target) => {
          var _a2;
          api.closePopover();
          if (!isFocusableElement(target, FocusableMode.Loose)) {
            event.preventDefault();
            (_a2 = dom(button)) == null ? void 0 : _a2.focus();
          }
        },
        vue.computed(
          () => popoverState.value === 0
          /* Open */
        )
      );
      return () => {
        let slot = { open: popoverState.value === 0, close: api.close };
        return vue.h(vue.Fragment, [
          vue.h(
            PortalWrapper,
            {},
            () => render({
              theirProps: { ...props, ...attrs },
              ourProps: { ref: internalPopoverRef },
              slot,
              slots,
              attrs,
              name: "Popover"
            })
          ),
          vue.h(root.MainTreeNode)
        ]);
      };
    }
  });
  let PopoverButton = vue.defineComponent({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: false },
      id: { type: String, default: () => `headlessui-popover-button-${useId()}` }
    },
    inheritAttrs: false,
    setup(props, { attrs, slots, expose }) {
      let api = usePopoverContext("PopoverButton");
      let ownerDocument = vue.computed(() => getOwnerDocument(api.button));
      expose({ el: api.button, $el: api.button });
      vue.onMounted(() => {
        api.buttonId.value = props.id;
      });
      vue.onUnmounted(() => {
        api.buttonId.value = null;
      });
      let groupContext = usePopoverGroupContext();
      let closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
      let panelContext = usePopoverPanelContext();
      let isWithinPanel = vue.computed(
        () => panelContext === null ? false : panelContext.value === api.panelId.value
      );
      let elementRef = vue.ref(null);
      let sentinelId = `headlessui-focus-sentinel-${useId()}`;
      if (!isWithinPanel.value) {
        vue.watchEffect(() => {
          api.button.value = elementRef.value;
        });
      }
      let type = useResolveButtonType(
        vue.computed(() => ({ as: props.as, type: attrs.type })),
        elementRef
      );
      function handleKeyDown(event) {
        var _a, _b, _c, _d, _e;
        if (isWithinPanel.value) {
          if (api.popoverState.value === 1)
            return;
          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault();
              (_b = (_a = event.target).click) == null ? void 0 : _b.call(_a);
              api.closePopover();
              (_c = dom(api.button)) == null ? void 0 : _c.focus();
              break;
          }
        } else {
          switch (event.key) {
            case Keys.Space:
            case Keys.Enter:
              event.preventDefault();
              event.stopPropagation();
              if (api.popoverState.value === 1)
                closeOthers == null ? void 0 : closeOthers(api.buttonId.value);
              api.togglePopover();
              break;
            case Keys.Escape:
              if (api.popoverState.value !== 0)
                return closeOthers == null ? void 0 : closeOthers(api.buttonId.value);
              if (!dom(api.button))
                return;
              if (((_d = ownerDocument.value) == null ? void 0 : _d.activeElement) && !((_e = dom(api.button)) == null ? void 0 : _e.contains(ownerDocument.value.activeElement)))
                return;
              event.preventDefault();
              event.stopPropagation();
              api.closePopover();
              break;
          }
        }
      }
      function handleKeyUp(event) {
        if (isWithinPanel.value)
          return;
        if (event.key === Keys.Space) {
          event.preventDefault();
        }
      }
      function handleClick(event) {
        var _a, _b;
        if (props.disabled)
          return;
        if (isWithinPanel.value) {
          api.closePopover();
          (_a = dom(api.button)) == null ? void 0 : _a.focus();
        } else {
          event.preventDefault();
          event.stopPropagation();
          if (api.popoverState.value === 1)
            closeOthers == null ? void 0 : closeOthers(api.buttonId.value);
          api.togglePopover();
          (_b = dom(api.button)) == null ? void 0 : _b.focus();
        }
      }
      function handleMouseDown(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      let direction = useTabDirection();
      function handleFocus() {
        let el = dom(api.panel);
        if (!el)
          return;
        function run() {
          let result = match(direction.value, {
            [Direction.Forwards]: () => focusIn(el, Focus.First),
            [Direction.Backwards]: () => focusIn(el, Focus.Last)
          });
          if (result === FocusResult.Error) {
            focusIn(
              getFocusableElements().filter((el2) => el2.dataset.headlessuiFocusGuard !== "true"),
              match(direction.value, {
                [Direction.Forwards]: Focus.Next,
                [Direction.Backwards]: Focus.Previous
              }),
              { relativeTo: dom(api.button) }
            );
          }
        }
        {
          run();
        }
      }
      return () => {
        let visible = api.popoverState.value === 0;
        let slot = { open: visible };
        let { id: id2, ...theirProps } = props;
        let ourProps = isWithinPanel.value ? {
          ref: elementRef,
          type: type.value,
          onKeydown: handleKeyDown,
          onClick: handleClick
        } : {
          ref: elementRef,
          id: id2,
          type: type.value,
          "aria-expanded": api.popoverState.value === 0,
          "aria-controls": dom(api.panel) ? api.panelId.value : void 0,
          disabled: props.disabled ? true : void 0,
          onKeydown: handleKeyDown,
          onKeyup: handleKeyUp,
          onClick: handleClick,
          onMousedown: handleMouseDown
        };
        return vue.h(vue.Fragment, [
          render({
            ourProps,
            theirProps: { ...attrs, ...theirProps },
            slot,
            attrs,
            slots,
            name: "PopoverButton"
          }),
          visible && !isWithinPanel.value && api.isPortalled.value && vue.h(Hidden, {
            id: sentinelId,
            features: Features.Focusable,
            "data-headlessui-focus-guard": true,
            as: "button",
            type: "button",
            onFocus: handleFocus
          })
        ]);
      };
    }
  });
  vue.defineComponent({
    name: "PopoverOverlay",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: false },
      unmount: { type: Boolean, default: true }
    },
    setup(props, { attrs, slots }) {
      let api = usePopoverContext("PopoverOverlay");
      let id2 = `headlessui-popover-overlay-${useId()}`;
      let usesOpenClosedState = useOpenClosed();
      let visible = vue.computed(() => {
        if (usesOpenClosedState !== null) {
          return (usesOpenClosedState.value & State.Open) === State.Open;
        }
        return api.popoverState.value === 0;
      });
      function handleClick() {
        api.closePopover();
      }
      return () => {
        let slot = {
          open: api.popoverState.value === 0
          /* Open */
        };
        let ourProps = {
          id: id2,
          "aria-hidden": true,
          onClick: handleClick
        };
        return render({
          ourProps,
          theirProps: props,
          slot,
          attrs,
          slots,
          features: Features$1.RenderStrategy | Features$1.Static,
          visible: visible.value,
          name: "PopoverOverlay"
        });
      };
    }
  });
  let PopoverPanel = vue.defineComponent({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: false },
      unmount: { type: Boolean, default: true },
      focus: { type: Boolean, default: false },
      id: { type: String, default: () => `headlessui-popover-panel-${useId()}` }
    },
    inheritAttrs: false,
    setup(props, { attrs, slots, expose }) {
      let { focus } = props;
      let api = usePopoverContext("PopoverPanel");
      let ownerDocument = vue.computed(() => getOwnerDocument(api.panel));
      let beforePanelSentinelId = `headlessui-focus-sentinel-before-${useId()}`;
      let afterPanelSentinelId = `headlessui-focus-sentinel-after-${useId()}`;
      expose({ el: api.panel, $el: api.panel });
      vue.onMounted(() => {
        api.panelId.value = props.id;
      });
      vue.onUnmounted(() => {
        api.panelId.value = null;
      });
      vue.provide(PopoverPanelContext, api.panelId);
      vue.watchEffect(() => {
        var _a, _b;
        if (!focus)
          return;
        if (api.popoverState.value !== 0)
          return;
        if (!api.panel)
          return;
        let activeElement = (_a = ownerDocument.value) == null ? void 0 : _a.activeElement;
        if ((_b = dom(api.panel)) == null ? void 0 : _b.contains(activeElement))
          return;
        focusIn(dom(api.panel), Focus.First);
      });
      let usesOpenClosedState = useOpenClosed();
      let visible = vue.computed(() => {
        if (usesOpenClosedState !== null) {
          return (usesOpenClosedState.value & State.Open) === State.Open;
        }
        return api.popoverState.value === 0;
      });
      function handleKeyDown(event) {
        var _a, _b;
        switch (event.key) {
          case Keys.Escape:
            if (api.popoverState.value !== 0)
              return;
            if (!dom(api.panel))
              return;
            if (ownerDocument.value && !((_a = dom(api.panel)) == null ? void 0 : _a.contains(ownerDocument.value.activeElement))) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            api.closePopover();
            (_b = dom(api.button)) == null ? void 0 : _b.focus();
            break;
        }
      }
      function handleBlur(event) {
        var _a, _b, _c, _d, _e;
        let el = event.relatedTarget;
        if (!el)
          return;
        if (!dom(api.panel))
          return;
        if ((_a = dom(api.panel)) == null ? void 0 : _a.contains(el))
          return;
        api.closePopover();
        if (((_c = (_b = dom(api.beforePanelSentinel)) == null ? void 0 : _b.contains) == null ? void 0 : _c.call(_b, el)) || ((_e = (_d = dom(api.afterPanelSentinel)) == null ? void 0 : _d.contains) == null ? void 0 : _e.call(_d, el))) {
          el.focus({ preventScroll: true });
        }
      }
      let direction = useTabDirection();
      function handleBeforeFocus() {
        let el = dom(api.panel);
        if (!el)
          return;
        function run() {
          match(direction.value, {
            [Direction.Forwards]: () => {
              var _a;
              let result = focusIn(el, Focus.First);
              if (result === FocusResult.Error) {
                (_a = dom(api.afterPanelSentinel)) == null ? void 0 : _a.focus();
              }
            },
            [Direction.Backwards]: () => {
              var _a;
              (_a = dom(api.button)) == null ? void 0 : _a.focus({ preventScroll: true });
            }
          });
        }
        {
          run();
        }
      }
      function handleAfterFocus() {
        let el = dom(api.panel);
        if (!el)
          return;
        function run() {
          match(direction.value, {
            [Direction.Forwards]: () => {
              let button = dom(api.button);
              let panel = dom(api.panel);
              if (!button)
                return;
              let elements = getFocusableElements();
              let idx = elements.indexOf(button);
              let before = elements.slice(0, idx + 1);
              let after = elements.slice(idx + 1);
              let combined = [...after, ...before];
              for (let element of combined.slice()) {
                if (element.dataset.headlessuiFocusGuard === "true" || (panel == null ? void 0 : panel.contains(element))) {
                  let idx2 = combined.indexOf(element);
                  if (idx2 !== -1)
                    combined.splice(idx2, 1);
                }
              }
              focusIn(combined, Focus.First, { sorted: false });
            },
            [Direction.Backwards]: () => {
              var _a;
              let result = focusIn(el, Focus.Previous);
              if (result === FocusResult.Error) {
                (_a = dom(api.button)) == null ? void 0 : _a.focus();
              }
            }
          });
        }
        {
          run();
        }
      }
      return () => {
        let slot = {
          open: api.popoverState.value === 0,
          close: api.close
        };
        let { id: id2, focus: _focus, ...theirProps } = props;
        let ourProps = {
          ref: api.panel,
          id: id2,
          onKeydown: handleKeyDown,
          onFocusout: focus && api.popoverState.value === 0 ? handleBlur : void 0,
          tabIndex: -1
        };
        return render({
          ourProps,
          theirProps: { ...attrs, ...theirProps },
          attrs,
          slot,
          slots: {
            ...slots,
            default: (...args) => {
              var _a;
              return [
                vue.h(vue.Fragment, [
                  visible.value && api.isPortalled.value && vue.h(Hidden, {
                    id: beforePanelSentinelId,
                    ref: api.beforePanelSentinel,
                    features: Features.Focusable,
                    "data-headlessui-focus-guard": true,
                    as: "button",
                    type: "button",
                    onFocus: handleBeforeFocus
                  }),
                  (_a = slots.default) == null ? void 0 : _a.call(slots, ...args),
                  visible.value && api.isPortalled.value && vue.h(Hidden, {
                    id: afterPanelSentinelId,
                    ref: api.afterPanelSentinel,
                    features: Features.Focusable,
                    "data-headlessui-focus-guard": true,
                    as: "button",
                    type: "button",
                    onFocus: handleAfterFocus
                  })
                ])
              ];
            }
          },
          features: Features$1.RenderStrategy | Features$1.Static,
          visible: visible.value,
          name: "PopoverPanel"
        });
      };
    }
  });
  vue.defineComponent({
    name: "PopoverGroup",
    inheritAttrs: false,
    props: {
      as: { type: [Object, String], default: "div" }
    },
    setup(props, { attrs, slots, expose }) {
      let groupRef = vue.ref(null);
      let popovers = vue.shallowRef([]);
      let ownerDocument = vue.computed(() => getOwnerDocument(groupRef));
      let root = useMainTreeNode();
      expose({ el: groupRef, $el: groupRef });
      function unregisterPopover(registerBag) {
        let idx = popovers.value.indexOf(registerBag);
        if (idx !== -1)
          popovers.value.splice(idx, 1);
      }
      function registerPopover(registerBag) {
        popovers.value.push(registerBag);
        return () => {
          unregisterPopover(registerBag);
        };
      }
      function isFocusWithinPopoverGroup() {
        var _a;
        let owner = ownerDocument.value;
        if (!owner)
          return false;
        let element = owner.activeElement;
        if ((_a = dom(groupRef)) == null ? void 0 : _a.contains(element))
          return true;
        return popovers.value.some((bag) => {
          var _a2, _b;
          return ((_a2 = owner.getElementById(bag.buttonId.value)) == null ? void 0 : _a2.contains(element)) || ((_b = owner.getElementById(bag.panelId.value)) == null ? void 0 : _b.contains(element));
        });
      }
      function closeOthers(buttonId) {
        for (let popover of popovers.value) {
          if (popover.buttonId.value !== buttonId)
            popover.close();
        }
      }
      vue.provide(PopoverGroupContext, {
        registerPopover,
        unregisterPopover,
        isFocusWithinPopoverGroup,
        closeOthers,
        mainTreeNodeRef: root.mainTreeNodeRef
      });
      return () => {
        let ourProps = { ref: groupRef };
        return vue.h(vue.Fragment, [
          render({
            ourProps,
            theirProps: { ...props, ...attrs },
            slot: {},
            attrs,
            slots,
            name: "PopoverGroup"
          }),
          vue.h(root.MainTreeNode)
        ]);
      };
    }
  });
  let LabelContext = Symbol("LabelContext");
  function useLabelContext() {
    let context = vue.inject(LabelContext, null);
    if (context === null) {
      let err = new Error("You used a <Label /> component, but it is not inside a parent.");
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, useLabelContext);
      throw err;
    }
    return context;
  }
  function useLabels({
    slot = {},
    name = "Label",
    props = {}
  } = {}) {
    let labelIds = vue.ref([]);
    function register(value) {
      labelIds.value.push(value);
      return () => {
        let idx = labelIds.value.indexOf(value);
        if (idx === -1)
          return;
        labelIds.value.splice(idx, 1);
      };
    }
    vue.provide(LabelContext, { register, slot, name, props });
    return vue.computed(() => labelIds.value.length > 0 ? labelIds.value.join(" ") : void 0);
  }
  vue.defineComponent({
    name: "Label",
    props: {
      as: { type: [Object, String], default: "label" },
      passive: { type: [Boolean], default: false },
      id: { type: String, default: () => `headlessui-label-${useId()}` }
    },
    setup(myProps, { slots, attrs }) {
      let context = useLabelContext();
      vue.onMounted(() => vue.onUnmounted(context.register(myProps.id)));
      return () => {
        let { name = "Label", slot = {}, props = {} } = context;
        let { id: id2, passive, ...theirProps } = myProps;
        let ourProps = {
          ...Object.entries(props).reduce(
            (acc, [key, value]) => Object.assign(acc, { [key]: vue.unref(value) }),
            {}
          ),
          id: id2
        };
        if (passive) {
          delete ourProps["onClick"];
          delete ourProps["htmlFor"];
          delete theirProps["onClick"];
        }
        return render({
          ourProps,
          theirProps,
          slot,
          attrs,
          slots,
          name
        });
      };
    }
  });
  let GroupContext = Symbol("GroupContext");
  vue.defineComponent({
    name: "SwitchGroup",
    props: {
      as: { type: [Object, String], default: "template" }
    },
    setup(props, { slots, attrs }) {
      let switchRef = vue.ref(null);
      let labelledby = useLabels({
        name: "SwitchLabel",
        props: {
          htmlFor: vue.computed(() => {
            var _a;
            return (_a = switchRef.value) == null ? void 0 : _a.id;
          }),
          onClick(event) {
            if (!switchRef.value)
              return;
            if (event.currentTarget.tagName === "LABEL") {
              event.preventDefault();
            }
            switchRef.value.click();
            switchRef.value.focus({ preventScroll: true });
          }
        }
      });
      let describedby = useDescriptions({ name: "SwitchDescription" });
      let api = { switchRef, labelledby, describedby };
      vue.provide(GroupContext, api);
      return () => render({ theirProps: props, ourProps: {}, slot: {}, slots, attrs, name: "SwitchGroup" });
    }
  });
  let Switch = vue.defineComponent({
    name: "Switch",
    emits: { "update:modelValue": (_value) => true },
    props: {
      as: { type: [Object, String], default: "button" },
      modelValue: { type: Boolean, default: void 0 },
      defaultChecked: { type: Boolean, optional: true },
      form: { type: String, optional: true },
      name: { type: String, optional: true },
      value: { type: String, optional: true },
      id: { type: String, default: () => `headlessui-switch-${useId()}` }
    },
    inheritAttrs: false,
    setup(props, { emit, attrs, slots, expose }) {
      let api = vue.inject(GroupContext, null);
      let [checked, theirOnChange] = useControllable(
        vue.computed(() => props.modelValue),
        (value) => emit("update:modelValue", value),
        vue.computed(() => props.defaultChecked)
      );
      function toggle() {
        theirOnChange(!checked.value);
      }
      let internalSwitchRef = vue.ref(null);
      let switchRef = api === null ? internalSwitchRef : api.switchRef;
      let type = useResolveButtonType(
        vue.computed(() => ({ as: props.as, type: attrs.type })),
        switchRef
      );
      expose({ el: switchRef, $el: switchRef });
      function handleClick(event) {
        event.preventDefault();
        toggle();
      }
      function handleKeyUp(event) {
        if (event.key === Keys.Space) {
          event.preventDefault();
          toggle();
        } else if (event.key === Keys.Enter) {
          attemptSubmit(event.currentTarget);
        }
      }
      function handleKeyPress(event) {
        event.preventDefault();
      }
      let form = vue.computed(() => {
        var _a, _b;
        return (_b = (_a = dom(switchRef)) == null ? void 0 : _a.closest) == null ? void 0 : _b.call(_a, "form");
      });
      vue.onMounted(() => {
        vue.watch(
          [form],
          () => {
            if (!form.value)
              return;
            if (props.defaultChecked === void 0)
              return;
            function handle() {
              theirOnChange(props.defaultChecked);
            }
            form.value.addEventListener("reset", handle);
            return () => {
              var _a;
              (_a = form.value) == null ? void 0 : _a.removeEventListener("reset", handle);
            };
          },
          { immediate: true }
        );
      });
      return () => {
        let { id: id2, name, value, form: form2, ...theirProps } = props;
        let slot = { checked: checked.value };
        let ourProps = {
          id: id2,
          ref: switchRef,
          role: "switch",
          type: type.value,
          tabIndex: 0,
          "aria-checked": checked.value,
          "aria-labelledby": api == null ? void 0 : api.labelledby.value,
          "aria-describedby": api == null ? void 0 : api.describedby.value,
          onClick: handleClick,
          onKeyup: handleKeyUp,
          onKeypress: handleKeyPress
        };
        return vue.h(vue.Fragment, [
          name != null && checked.value != null ? vue.h(
            Hidden,
            compact({
              features: Features.Hidden,
              as: "input",
              type: "checkbox",
              hidden: true,
              readOnly: true,
              checked: checked.value,
              form: form2,
              name,
              value
            })
          ) : null,
          render({
            ourProps,
            theirProps: { ...attrs, ...omit(theirProps, ["modelValue", "defaultChecked"]) },
            slot,
            attrs,
            slots,
            name: "Switch"
          })
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {};
  const _hoisted_1$4 = { class: "my-1.5 border-b border-token-border-light" };
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4);
  }
  const DividerItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
  const _sfc_main$4 = {};
  const _hoisted_1$3 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M2.16479 10.0003C2.16479 5.67409 5.6719 2.16699 9.99813 2.16699C14.3244 2.16699 17.8315 5.67409 17.8315 10.0003C17.8315 14.3266 14.3244 17.8337 9.99813 17.8337C5.6719 17.8337 2.16479 14.3266 2.16479 10.0003Z",
    stroke: "currentColor",
    "stroke-opacity": "0.16",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
  const CircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M1.66479 10.0003C1.66479 5.39795 5.39575 1.66699 9.99813 1.66699C14.6005 1.66699 18.3315 5.39795 18.3315 10.0003C18.3315 14.6027 14.6005 18.3337 9.99813 18.3337C5.39575 18.3337 1.66479 14.6027 1.66479 10.0003ZM13.3944 6.61049C13.7708 6.87535 13.8612 7.39518 13.5963 7.77157L9.63797 13.3966C9.49241 13.6034 9.26078 13.733 9.00835 13.7487C8.75591 13.7645 8.50998 13.6647 8.33984 13.4776L6.25651 11.1859C5.94692 10.8453 5.97202 10.3183 6.31257 10.0087C6.65311 9.69912 7.18015 9.72422 7.48974 10.0648L8.87348 11.5869L12.2333 6.81241C12.4982 6.43603 13.018 6.34562 13.3944 6.61049Z",
    fill: "currentColor"
  }, null, -1);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
  const CircleCheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
  const _hoisted_1$1 = { class: "flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-black/5 dark:hover:bg-white/5 radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100" };
  const _hoisted_2$1 = { class: "flex grow items-center justify-between gap-2" };
  const _hoisted_3$1 = { class: "flex items-center gap-3" };
  const _hoisted_4 = { class: "text-token-text-tertiary" };
  const _sfc_main$2 = {
    __name: "ModelItem",
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      isSelected: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("div", _hoisted_3$1, [
                vue.createElementVNode("div", null, [
                  vue.createTextVNode(vue.toDisplayString(__props.title) + " ", 1),
                  vue.createElementVNode("div", _hoisted_4, vue.toDisplayString(__props.description), 1)
                ])
              ])
            ]),
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.isSelected ? CircleCheckIcon : CircleIcon), { class: "icon-md block shrink-0" }))
          ])
        ]);
      };
    }
  };
  const _sfc_main$1 = {};
  const _hoisted_1 = {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
  const ChevronDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const extraModels = [
    {
      slug: "text-davinci-002-render-sha-mobile",
      title: "GPT-3.5 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt3.5", "mobile", "unofficial"]
    },
    {
      slug: "gpt-4-mobile",
      title: "GPT-4 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt4", "mobile", "unofficial"]
    }
  ];
  const models = vue.reactive({
    all: [],
    update(newModels) {
      this.all = newModels.concat(
        extraModels.filter(
          (model) => newModels.some((m) => m.tags.includes("gpt4")) || !model.tags.includes("gpt4")
        )
      );
    }
  });
  const LOCAL_STORAGE_KEY = "github.com/hydrotho/ChatGPT_Model_Switcher";
  function getInitialState() {
    const defaultState = {
      isEnabled: false,
      selectedModelSlug: "text-davinci-002-render-sha"
    };
    try {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.warn(
        "[ChatGPT_Model_Switcher]",
        "Failed to restore state from localStorage, falling back to default state"
      );
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }
  const state = vue.reactive(getInitialState());
  vue.watch(state, (newState) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  });
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const anchorPopoverPanel = vue.ref();
      const stylePopoverPanel = vue.ref();
      const groupedModels = vue.computed(() => {
        return [
          models.all.filter(
            (model) => model.tags.includes("gpt3.5") && !model.tags.includes("unofficial")
          ),
          models.all.filter((model) => model.tags.includes("gpt4") && !model.tags.includes("unofficial")),
          models.all.filter((model) => model.tags.includes("unofficial"))
        ].filter((group) => group.length > 0);
      });
      const selectModel = (slug) => {
        const isOldGpt4 = state.selectedModelSlug.startsWith("gpt-4");
        const isNewGpt4 = slug.startsWith("gpt-4");
        state.selectedModelSlug = slug;
        if (!isOldGpt4 && isNewGpt4) {
          window.location.href = "https://chat.openai.com/?model=gpt-4";
        }
      };
      vue.onMounted(async () => {
        const rect = anchorPopoverPanel.value.getBoundingClientRect();
        stylePopoverPanel.value = {
          position: "fixed",
          right: `${document.documentElement.clientWidth - rect.right}px`,
          top: `${rect.bottom}px`
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(vue.unref(Switch), {
            modelValue: vue.unref(state).isEnabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(state).isEnabled = $event),
            class: vue.normalizeClass([vue.unref(state).isEnabled ? "bg-green-600" : "bg-gray-200", "cursor-pointer relative shrink-0 rounded-full h-[20px] w-[32px]"])
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle(vue.unref(state).isEnabled ? "transform: translateX(14px)" : "transform: translateX(0.125rem)"),
                class: "flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)] h-[16px] w-[16px]"
              }, null, 4)
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          vue.createVNode(vue.unref(Popover), { class: "relative" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(PopoverButton), { class: "group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" ChatGPT Model Switcher "),
                  vue.createVNode(ChevronDownIcon, { class: "text-token-text-tertiary" })
                ]),
                _: 1
              }),
              vue.createElementVNode("div", {
                ref_key: "anchorPopoverPanel",
                ref: anchorPopoverPanel,
                class: "absolute right-0"
              }, null, 512),
              (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
                vue.createVNode(vue.Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(PopoverPanel), {
                      class: "mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                      style: vue.normalizeStyle(stylePopoverPanel.value)
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupedModels.value, (group, index) => {
                          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(group, (model) => {
                              return vue.openBlock(), vue.createBlock(_sfc_main$2, {
                                key: model.slug,
                                title: model.title,
                                description: model.description,
                                isSelected: model.slug === vue.unref(state).selectedModelSlug,
                                onClick: ($event) => selectModel(model.slug)
                              }, null, 8, ["title", "description", "isSelected", "onClick"]);
                            }), 128)),
                            index < groupedModels.value.length - 1 ? (vue.openBlock(), vue.createBlock(DividerItem, { key: index })) : vue.createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          })
        ], 64);
      };
    }
  };
  let app = null;
  function mountApp(mountPoint) {
    if (app) {
      app.unmount();
      app = null;
    }
    const rootContainer = document.createElement("div");
    rootContainer.className = "flex gap-2 pr-1 items-center";
    rootContainer.id = "chatgpt-model-switcher";
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-2";
    wrapper.appendChild(rootContainer);
    wrapper.appendChild(mountPoint.removeChild(mountPoint.lastChild));
    mountPoint.appendChild(wrapper);
    app = vue.createApp(_sfc_main);
    app.mount(rootContainer);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const mountPoint = document.querySelector("main div.sticky");
        if (mountPoint && !document.getElementById("chatgpt-model-switcher")) {
          mountApp(mountPoint);
          break;
        }
      }
    }
  }).observe(document.body, {
    subtree: true,
    childList: true
  });
  const CONVERSATION_API_URL = "https://chat.openai.com/backend-api/conversation";
  const MODELS_API_URL = "https://chat.openai.com/backend-api/models";
  async function handleModelsApi(fetchPromise) {
    return fetchPromise.then(async (response) => {
      if (response.ok) {
        const data = await response.clone().json();
        models.update(data.models);
      }
      return response;
    });
  }
  window.fetch = new Proxy(window.fetch, {
    apply: async function(target, that, args) {
      let resource = args[0];
      let options = args[1];
      if (state.isEnabled && resource === CONVERSATION_API_URL) {
        const requestBody = JSON.parse(options.body);
        requestBody.model = state.selectedModelSlug;
        if (requestBody.model.startsWith("text-davinci-002-render-sha")) {
          requestBody.arkose_token = null;
        }
        options = { ...options, body: JSON.stringify(requestBody) };
        args[0] = resource;
        args[1] = options;
      }
      const fetchPromise = Reflect.apply(target, that, args);
      if (resource.includes(MODELS_API_URL)) {
        return handleModelsApi(fetchPromise);
      }
      return fetchPromise;
    }
  });

})(Vue);