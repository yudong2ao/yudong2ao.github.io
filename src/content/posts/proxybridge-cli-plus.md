---
title: ProxyBridge 增强包：Windows 进程级分流、网页可视化配置与开机静默自启
date: 2026-08-02
summary: 打造更便携的 Windows 进程级透明代理体验。结合 WinDivert 网络驱动，提供网页可视化配置器与开机静默自启方案。
category: 开源工具
tags: [ProxyBridge, 进程代理, Windows, 网络工具, 效率工具]
comments: true
draft: false
---

> **核心特性**：按进程名精准分流、双击网页即可图形化生成配置规则、后台静默自启无弹窗打扰。

## 前言

在 Windows 上使用网络代理时，很多开发者和玩家常常面临两难困境：

- **全局代理/TUN 模式**：虽然省事，但往往会导致不希望走代理的软件（如局域网打印机、企业内网通讯工具、本地大流量下载软件等）被无差别代理，不仅浪费流量，还可能导致网络断连；
- **软件内手动设置代理**：很多命令行工具、老旧单机游戏、特定桌面客户端根本没有代理设置选项，想要让其走指定节点极其困难。

**ProxyBridge** 是开源社区一款基于 WinDivert 驱动的优秀进程级透明代理工具。然而官方 CLI 版本通常需要手动在终端中敲命令或手动编写复杂的规则配置文件。

为了让日常使用体验更加顺滑，我基于官方核心组件制作了这个**增强懒人包 —— ProxyBridge_CLI_Plus**，补全了可视化交互与静默自启拼图。

---

## 亮点特色

- 🎯 **纯粹的进程级精准分流**：无需为软件寻找系统设置入口，直接通过程序名（如 `chrome.exe`、`git.exe`、`Figma.exe`）自由控制是否接管；
- 🖥️ **网页可视化配置器 (`ProfileMake.html`)**：告别繁琐的手动编辑配置文件！只需双击打开本地 HTML 页面，即可可视化编辑节点信息与分流规则，甚至支持在网页上直接浏览选择 `.exe` 程序追加规则；
- ⚡ **开机后台静默自启 (`一键配置自启.bat`)**：集成无黑框静默运行方案，管理员右键一键部署开机自启，开机即用，零弹窗干扰；
- 🔄 **无缝跟随官方升级**：完全遵循官方的配置文件标准与运行规范，后续若官方发布核心引擎更新，直接替换对应的 `ProxyBridge_CLI.exe` 即可平滑升级。

---

## 项目目录组成

增强包精简内敛，包含完整的核心组件与配套交互工具：

```text
ProxyBridge/
├── ProfileMake.html       # 网页版规则生成器 (可视化编辑节点与进程)
├── 一键配置自启.bat       # 开机后台静默自启一键脚本
├── Default.pbprofile      # 默认分流规则配置文件
├── ProxyBridge_CLI.exe    # 核心命令行程序
├── ProxyBridgeCore.dll   # 核心处理动态链接库
├── WinDivert.dll          # 底层驱动接口库
└── WinDivert64.sys        # Windows 64位底层网络拦截驱动
```

---

## 使用说明

### 1. 可视化编辑分流规则

双击打开 `ProfileMake.html`：

- 输入你的本地代理监听地址（例如 SOCKS5 / HTTP 代理端口）；
- 添加需要走代理的进程名单；
- 点击导出按钮，将生成的配置保存并覆盖目录下的 `Default.pbprofile`。

### 2. 启动与常驻

- **开机静默自启（推荐）**：右键点击 `一键配置自启.bat`，选择 **“以管理员身份运行”**。脚本会自动将后台静默服务挂载至系统任务，无需二次操作；
- **临时调试运行**：以管理员身份打开终端，运行：
  ```bash
  ProxyBridge_CLI.exe --profile "Default.pbprofile"
  ```

---

## 获取源码与项目地址

完整项目增强包与可视化源码已在 GitHub 开源：

👉 **GitHub 仓库**：[yudong2ao/ProxyBridge_CLI_Plus](https://github.com/yudong2ao/ProxyBridge_CLI_Plus)

```bash
git clone https://github.com/yudong2ao/ProxyBridge_CLI_Plus.git
```

> **致谢**：在此特别感谢官方开源项目 **ProxyBridge** 及其社区贡献者提供的优秀网络驱动与核心分流能力。
