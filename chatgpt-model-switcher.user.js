// ==UserScript==
// @name           ChatGPT Model Switcher
// @namespace      https://github.com/hydrotho/ChatGPT_Model_Switcher
// @copyright      2023, Hydrotho (https://github.com/hydrotho)
// @version        0.0.1
// @description:en Override GPT-4 usage limits in the ChatGPT web interface by enabling the GPT-4 Mobile model.
// @description:zh 通过启用 GPT-4 Mobile 模型，解除 ChatGPT 网页端对 GPT-4 模型使用次数的限制。
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @grant          none
// @author         Hydrotho
// @match          http*://chat.openai.com/*
// @updateURL      https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js
// @downloadURL    https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js
// @supportURL     https://github.com/hydrotho/ChatGPT_Model_Switcher/issues
// ==/UserScript==

(function () {
    'use strict';

    let useGpt4Mobile = localStorage.getItem('useGpt4Mobile') !== 'false';

    window.fetch = new Proxy(window.fetch, {
        apply: function (target, that, args) {
            let resource = args[0];
            let options = args[1];

            if (useGpt4Mobile && resource === 'https://chat.openai.com/backend-api/conversation') {
                const requestBody = JSON.parse(options.body);
                requestBody.model = 'gpt-4-mobile';
                options = {...options, body: JSON.stringify(requestBody)};
                args[0] = resource;
                args[1] = options;
            }

            return Reflect.apply(target, that, args);
        }
    });

    const switchLabel = document.createElement('label');
    switchLabel.className = 'switch';
    switchLabel.title = 'Check to use GPT-4 Mobile model';

    const switchCheckbox = document.createElement('input');
    switchCheckbox.type = 'checkbox';
    switchCheckbox.id = 'useGpt4MobileCheckbox';
    switchCheckbox.checked = useGpt4Mobile;
    switchCheckbox.addEventListener('change', event => {
        useGpt4Mobile = event.target.checked;
        localStorage.setItem('useGpt4Mobile', useGpt4Mobile);
    });

    const switchSlider = document.createElement('span');
    switchSlider.className = 'slider round';

    switchLabel.appendChild(switchCheckbox);
    switchLabel.appendChild(switchSlider);

    const switchText = document.createElement('label');
    switchText.htmlFor = 'useGpt4MobileCheckbox';
    switchText.style.verticalAlign = 'middle';
    switchText.style.color = '#ffffff';
    switchText.textContent = 'Use GPT-4 Mobile';

    const switchContainer = document.createElement('div');
    switchContainer.style.cssText = `
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

    switchContainer.addEventListener('mouseenter', () => {
        switchContainer.style.opacity = '1';
    });

    switchContainer.addEventListener('mouseleave', () => {
        switchContainer.style.opacity = '0.5';
    });

    switchContainer.appendChild(switchLabel);
    switchContainer.appendChild(switchText);

    document.body.appendChild(switchContainer);

    const style = document.createElement('style');
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
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .4s;
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
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;

    document.head.appendChild(style);
})();
