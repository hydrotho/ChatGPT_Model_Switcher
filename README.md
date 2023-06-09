# ChatGPT Model Switcher

[English](README.md) | [中文](README_zh.md)

ChatGPT Model Switcher is a user script that allows users to override GPT-4 usage limits in the ChatGPT web interface by enabling the GPT-4 Mobile model. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.

🔴 Important Notice: It is recommended not to switch models during a single conversation as it might trigger the message: "The previous model used in this conversation is unavailable. We've switched you to the latest default model," potentially leading to unforeseen repercussions.

🔵 Note for Users Without a ChatGPT Plus Subscription: The script intuitively disables models that aren't accessible to you in the drop-down menu, and it conveniently defaults to the GPT-3.5 model.

⚠️ Update 2023.06.25: ChatGPT is currently enhancing its authentication mechanism. If you encounter the following error message during use: "Our systems have detected unusual activity from your system. Please try again later." Please [open an issue](https://github.com/hydrotho/ChatGPT_Model_Switcher/issues).

⚠️ Update 2023.06.26: ChatGPT has implemented a usage cap for the GPT-4 Mobile model. If you're using the web version, you may encounter: "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again after XXX." If you're using the iOS version, you may encounter: "You have sent too many messages to the model. Please try again later."

## Installation

1. Install a user script manager, such as [Tampermonkey](https://www.tampermonkey.net/).
2. Click [here](https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js) to install the script.
3. Once installed, visit [ChatGPT](https://chat.openai.com/) and enjoy using the GPT-4 Mobile model with the "ChatGPT Model Switcher"!

## Usage

To use the GPT-4 Mobile or other models, simply select the desired model from the options on the top-right corner of the ChatGPT web interface.

![ChatGPT Model Switcher](https://github.com/hydrotho/ChatGPT_Model_Switcher/assets/42911474/878f6d8f-c33d-43a5-b939-0b12017d587f)

## Model Options

| Title                  | Description                                                                                                                                                                                                              | Max Tokens | Qualitative Properties                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------- |
| GPT-3.5                | Our fastest model, great for most everyday tasks.                                                                                                                                                                        | 8191       | Reasoning:<br>★★★☆☆<br>Speed:<br>★★★★★<br>Conciseness:<br>★★☆☆☆ |
| GPT-3.5-Mobile         | Our fastest model, great for most everyday tasks.                                                                                                                                                                        | 8191       | Reasoning:<br>★★★☆☆<br>Speed:<br>★★★★★<br>Conciseness:<br>★★☆☆☆ |
| GPT-4                  | Our most capable model, great for tasks that require creativity and advanced reasoning.                                                                                                                                  | 4095       | Reasoning:<br>★★★★★<br>Speed:<br>★★☆☆☆<br>Conciseness:<br>★★★★☆ |
| GPT-4-Code-Interpreter | An experimental model that can solve tasks by generating Python code and executing it in a Jupyter notebook. You can upload any kind of file, and ask model to analyse it, or produce a new file which you can download. | 8192       |                                                                       |
| GPT-4-Plugins          | An experimental model that knows when and how to use plugins.                                                                                                                                                            | 8192       |                                                                       |
| GPT-4-Browsing         | An experimental model that knows when and how to browse the internet.                                                                                                                                                    | 4095       |                                                                       |
| GPT-4-Mobile           | Our most capable model, great for tasks that require creativity and advanced reasoning.                                                                                                                                  | 4095       | Reasoning:<br>★★★★★<br>Speed:<br>★★☆☆☆<br>Conciseness:<br>★★★★☆ |

## Support

If you encounter any issues or have any suggestions, please [open an issue](https://github.com/hydrotho/ChatGPT_Model_Switcher/issues).

## License

This project is licensed under the MIT License, see the [LICENSE](LICENSE) file for details.
