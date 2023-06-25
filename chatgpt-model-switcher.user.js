// ==UserScript==
// @name              ChatGPT Model Switcher (Supports GPT-4 Mobile and All Available Models)
// @name:zh-CN        ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @name:zh-TW        ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @namespace         https://github.com/hydrotho/ChatGPT_Model_Switcher
// @copyright         2023, Hydrotho (https://github.com/hydrotho)
// @version           1.1.0
// @description       Override GPT-4 usage limits in the ChatGPT web interface by enabling the GPT-4 Mobile model. Additional models can also be enabled for switching, providing more flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.
// @description:zh-CN 通过启用 GPT-4 Mobile 模型，解除 ChatGPT 网页端对 GPT-4 模型使用次数的限制。同时还可启用其他模型进行切换，提供更多的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @description:zh-TW 通过启用 GPT-4 Mobile 模型，解除 ChatGPT 网页端对 GPT-4 模型使用次数的限制。同时还可启用其他模型进行切换，提供更多的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @grant             none
// @author            Hydrotho
// @match             http*://chat.openai.com/*
// @updateURL         https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js
// @downloadURL       https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js
// @supportURL        https://github.com/hydrotho/ChatGPT_Model_Switcher/issues
// @license           MIT
// ==/UserScript==

(function () {
  "use strict";

  let useModelSwitcher = localStorage.getItem("useModelSwitcher") !== "false";
  let selectedModel = localStorage.getItem("selectedModel") || "GPT-4 (Mobile)";

  const modelMapping = {
    "GPT-3.5": "text-davinci-002-render-sha",
    "GPT-4": "gpt-4",
    "GPT-4 Web Browsing": "gpt-4-browsing",
    "GPT-4 Plugins": "gpt-4-plugins",
    "GPT-3.5 (Mobile)": "text-davinci-002-render-sha-mobile",
    "GPT-4 (Mobile)": "gpt-4-mobile",
  };

  const arkoseTokenBda = btoa(JSON.stringify({ ct: "", iv: "", s: "" }));
  const arkoseTokenPublicKey = "35536E1E-65B4-4D96-9D97-6ADB7EFF8147";
  const arkoseTokenSite = "https://chat.openai.com";
  const arkoseTokenUserBrowser =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58";
  const arkoseTokenCapiVersion = "1.5.2";
  const arkoseTokenCapiMode = "lightbox";
  const arkoseTokenStyleTheme = "default";
  const arkoseTokenRnd = Math.random().toFixed(17);
  const arkoseTokenUrl =
    "https://tcr9i.chat.openai.com/fc/gt2/public_key/" + arkoseTokenPublicKey;

  const CONVERSATION_API_URL =
    "https://chat.openai.com/backend-api/conversation";
  const MODELS_API_URL =
    "https://chat.openai.com/backend-api/models?history_and_training_disabled=false";

  async function getArkoseParams(timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(
        "https://ai.fakeopen.com/api/arkose/params",
        {
          signal: controller.signal,
        }
      );

      clearTimeout(id);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          "Arkose params fetch failed with status: " + response.status
        );
      }
    } catch (error) {
      console.error(
        "Failed to fetch Arkose params from remote server, using local fallback.",
        error
      );
      return {
        bda: arkoseTokenBda,
        public_key: arkoseTokenPublicKey,
        site: arkoseTokenSite,
        userbrowser: arkoseTokenUserBrowser,
        capi_version: arkoseTokenCapiVersion,
        capi_mode: arkoseTokenCapiMode,
        style_theme: arkoseTokenStyleTheme,
        rnd: arkoseTokenRnd,
      };
    }
  }

  async function getArkoseToken(params) {
    const formParams = new URLSearchParams(params);
    try {
      const response = await fetch(arkoseTokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: formParams,
      });

      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        throw new Error(
          "Arkose token fetch failed with status: " + response.status
        );
      }
    } catch (error) {
      console.error(
        "Failed to fetch Arkose token using given parameters.",
        error
      );
      return null;
    }
  }

  window.fetch = new Proxy(window.fetch, {
    apply: async function (target, that, args) {
      let resource = args[0];
      let options = args[1];

      if (useModelSwitcher && resource === CONVERSATION_API_URL) {
        const requestBody = JSON.parse(options.body);
        requestBody.model = modelMapping[selectedModel];

        if (
          requestBody.model.startsWith("gpt-4") &&
          requestBody.arkose_token === null
        ) {
          const arkoseParams = await getArkoseParams();
          requestBody.arkose_token = await getArkoseToken(arkoseParams);
        } else if (
          requestBody.model.startsWith("text-davinci-002-render-sha") &&
          requestBody.arkose_token !== null
        ) {
          requestBody.arkose_token = null;
        }

        options = { ...options, body: JSON.stringify(requestBody) };
        args[0] = resource;
        args[1] = options;
      }

      const fetchPromise = Reflect.apply(target, that, args);

      if (resource.includes(MODELS_API_URL)) {
        return fetchPromise.then((response) => {
          if (response.ok) {
            response
              .clone()
              .json()
              .then((data) => {
                const accessibleModels = data.models.map((model) => model.slug);
                Object.keys(modelMapping).forEach((model) => {
                  const mappedSlug = modelMapping[model];
                  const selectOption = document.querySelector(
                    `#modelSelect option[value="${model}"]`
                  );
                  if (selectOption && !accessibleModels.includes(mappedSlug)) {
                    selectOption.disabled = true;
                    if (selectedModel === model) {
                      selectedModel = "GPT-3.5";
                      localStorage.setItem("selectedModel", selectedModel);
                      document.querySelector("#modelSelect").value =
                        selectedModel;
                    }
                  }
                });
              });
          }
          return response;
        });
      }
      return fetchPromise;
    },
  });

  function createSwitchElement() {
    const switchLabel = document.createElement("label");
    switchLabel.className = "switch";
    switchLabel.title = "Check to enable the model switcher";

    const switchCheckbox = document.createElement("input");
    switchCheckbox.type = "checkbox";
    switchCheckbox.id = "useModelSwitcherCheckbox";
    switchCheckbox.checked = useModelSwitcher;
    switchCheckbox.addEventListener("change", (event) => {
      useModelSwitcher = event.target.checked;
      localStorage.setItem("useModelSwitcher", useModelSwitcher);
    });

    const switchSlider = document.createElement("span");
    switchSlider.className = "slider round";

    switchLabel.appendChild(switchCheckbox);
    switchLabel.appendChild(switchSlider);

    return switchLabel;
  }

  function createModelSelectElement() {
    const selectContainer = document.createElement("div");
    selectContainer.style.position = "relative";

    const select = document.createElement("select");
    select.id = "modelSelect";
    select.addEventListener("change", (event) => {
      selectedModel = event.target.value;
      localStorage.setItem("selectedModel", selectedModel);
    });

    for (const model in modelMapping) {
      const option = document.createElement("option");
      option.text = model;
      option.value = model;
      select.appendChild(option);
    }

    select.value = selectedModel;

    const selectArrow = document.createElement("div");
    selectArrow.style.cssText = `
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333" width="18px" height="18px"%3E%3Cpath d="M7 10l5 5 5-5z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  `;

    selectContainer.appendChild(select);
    selectContainer.appendChild(selectArrow);

    return selectContainer;
  }

  function createModelSwitcherContainer() {
    const container = document.createElement("div");
    container.style.cssText = `
    position: fixed;
    top: 10px;
    right: 18px;
    background-color: rgb(32, 33, 35);
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    z-index: 9999;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    opacity: 0.5;
  `;

    container.addEventListener("mouseenter", () => {
      container.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
      container.style.opacity = "0.5";
    });

    const switchElement = createSwitchElement();
    const modelSelectElement = createModelSelectElement();

    container.appendChild(switchElement);
    container.appendChild(modelSelectElement);

    return container;
  }

  const container = createModelSwitcherContainer();
  document.body.appendChild(container);

  const style = document.createElement("style");
  style.textContent = `
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-right: 10px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .5s;
    border-radius: 35px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .5s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 35px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  select {
    color: #000000;
    background-color: #ffffff;
    padding: 5px;
    border: none;
    border-radius: 5px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333" width="18px" height="18px"%3E%3Cpath d="M7 10l5 5 5-5z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

  document.head.appendChild(style);
})();
