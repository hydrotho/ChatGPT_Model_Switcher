# ChatGPT Model Switcher

[English](README.md) | [中文](README_zh.md)

ChatGPT Model Switcher 是一个用户脚本，允许用户通过启用 GPT-4 Mobile 模型，来解除 ChatGPT 网页端对 GPT-4 模型使用次数的限制。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。

🔴 重要提醒：我们建议您在同一次对话中避免切换模型。这样做可能会触发以下信息：“The previous model used in this conversation is unavailable. We've switched you to the latest default model.” 这可能会导致未预见的结果。

🔵 对于无 ChatGPT Plus 订阅的用户的注意事项：脚本会自动禁用下拉菜单中对您不可用的模型，并默认选择 GPT-3.5 模型。

## 安装

1. 安装一个用户脚本管理器，如 [Tampermonkey](https://www.tampermonkey.net/)。
2. 点击 [此处](https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/chatgpt-model-switcher.user.js) 安装脚本。
3. 安装后，访问 [ChatGPT](https://chat.openai.com/)，即可使用 "ChatGPT Model Switcher" 愉快地体验 GPT-4 Mobile 模型！

## 使用

要使用 GPT-4 Mobile 或其他模型，只需在 ChatGPT 网页端右上角的选项中选择所需的模型即可。

![ChatGPT Model Switcher](https://github.com/hydrotho/ChatGPT_Model_Switcher/assets/42911474/878f6d8f-c33d-43a5-b939-0b12017d587f)

## 模型选项

| 模型名称       | 描述                                                | 最大 Tokens | 质量特性                                                          |
| -------------- | ----------------------------------------------------| ----------- | ----------------------------------------------------------------- |
| GPT-3.5        | 我们最快的模型，适用于大多数日常任务。              | 8191        | 推理能力：<br>★★★☆☆<br>速度：<br>★★★★★<br>简洁性：<br>★★☆☆☆ |
| GPT-3.5-Mobile | 我们最快的模型，适用于大多数日常任务。              | 8191        | 推理能力：<br>★★★☆☆<br>速度：<br>★★★★★<br>简洁性：<br>★★☆☆☆ |
| GPT-4          | 我们最强大的模型，适用于需要创造力和高级推理的任务。| 4095        | 推理能力：<br>★★★★★<br>速度：<br>★★☆☆☆<br>简洁性：<br>★★★★☆ |
| GPT-4-Plugins  | 一个实验性模型，知道何时以及如何使用插件。          | 8195        |                                                                   |
| GPT-4-Browsing | 一个实验性模型，知道何时以及如何浏览互联网。        | 4095        |                                                                   |
| GPT-4-Mobile   | 我们最强大的模型，适用于需要创造力和高级推理的任务。| 4095        | 推理能力：<br>★★★★★<br>速度：<br>★★☆☆☆<br>简洁性：<br>★★★★☆ |

## 支持

如果您遇到任何问题或有任何建议，欢迎 [提出问题](https://github.com/hydrotho/ChatGPT_Model_Switcher/issues)。

## 许可证

本项目采用 MIT 许可证，详情请参见 [LICENSE](LICENSE) 文件。
