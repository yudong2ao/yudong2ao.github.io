---
title: HealthEnhance：连续工作自动休息提醒脚本
date: 2024-05-06
summary: 一款专为久坐办公人群设计的轻量级健康守护脚本，能够在连续工作达到设定时间后自动进行 Windows 原生 Toast 弹窗休息提醒。
category: 开源工具
tags: [PowerShell, Windows, 效率工具, 健康]
comments: true
draft: false
---

> A script designed to remind yourself to take a break after a period of continuous work / 旨在连续工作一段时间后自动进行休息提醒的脚本

## 前言

我经常在工位上一坐就是一个上午，一个下午，这对健康是非常不好的，特别是成年男性的前列腺健康和尿路健康深受此害，可能我真的太过专注了吧😁，我开始寻找一个“能够在我连续工作一段时间后提醒我休息一下的程序”，可惜的是，大部分的程序只是傻傻的定时提醒，不能检测我是否连续工作了一段时间，所以我试着去自己写一个出来，所以便有了它。

## 需求描述

当连续工作达到 60 分钟时（中断工作的时间不到 5 分钟认为是连续工作），提醒我“停下来休息一下吧”，弹窗显示五秒后自动隐藏。

## 实现效果

1. **状态判定**：鼠标或者键盘处于活动状态时就认为是在工作，鼠标和键盘全都处于非活动状态时认为在休息；
2. **定时提醒**：连续工作达到 60 分钟时，系统弹窗提醒休息，弹窗显示五秒自动隐藏，然后自动进入下一个连续工作 60 分钟的计时；
3. **防抖重置**：中断工作不足 5 分钟，不影响连续工作 60 分钟的计时，中断工作超过 5 分钟，连续工作 60 分钟的计时从零开始。

---

![HealthEnhance 弹窗提醒预览](https://user-images.githubusercontent.com/59545510/236426681-00b282b5-c3fd-455b-b7a6-ab60a2043925.png)

## 特点

1. **极简，资源占用低** —— 使用 PowerShell 脚本，无前端页面，调用系统原生 API，执行效率高，代码行不过百；
2. **功能强大，实用灵活** —— 检测是否连续工作一段时间，支持开机自启动，执行无窗口，可灵活修改连续工作的时间阈值；
3. **开箱即用，纯净免配** —— 无需安装第三方模块，无需修改系统执行策略，无绝对路径限制。

## 使用步骤

### 1. 下载项目包

下载项目到本地任意文件夹（脚本已适配相对路径，支持放置在任意位置）。

> **注**：你可以直接替换同目录下的 `icon.png` 来更改通知图标，或者在 `HealthEnhance.ps1` 脚本中修改你想要的提醒文字。

### 2. 创建快捷方式（实现开机自启）

为 `HideRunHE.vbs` 文件右键创建快捷方式，然后将快捷方式移动到系统的启动目录下（可以放在 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\` 或按 <kbd>Win</kbd> + <kbd>R</kbd> 键输入 `shell:startup` 打开当前用户的启动目录）。

### 3. 立即运行

双击运行 `HideRunHE.vbs`（或重启系统），脚本即会在后台静默守护你的健康。

## 灵活修改

目前默认是连续工作 60 分钟进行提醒，中断工作 5 分钟影响连续工作时间的计时。你可以使用记事本打开 `HealthEnhance.ps1`，按照自己的想法修改时间阈值：

```powershell
$IdleLimit = 300 # 空闲时间限制（秒）
$WorkLimit = 3600 # 工作时间限制（秒）
```

## 获取源码与项目地址

完整项目源码、自启脚本及自定义图标已开源在 GitHub，欢迎前往仓库下载使用或贡献代码：

👉 **GitHub 仓库**：[yudong2ao/HealthEnhance](https://github.com/yudong2ao/HealthEnhance)

```bash
# 通过 Git 克隆项目到本地
git clone https://github.com/yudong2ao/HealthEnhance.git
```

如果这个小工具对你的健康工作有所帮助，欢迎在 GitHub 上点个 ⭐️ **Star** 支持一下！
