# LONELY Todo - React Native Todo App

<div align="center">
  <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151003519.png" width="200" alt="应用图标">
</div>

<p align="center">
  <img alt="license" src="https://img.shields.io/github/license/Lonely0710/todo-app-rn?style=flat-round" />
  <img alt="stars" src="https://img.shields.io/github/stars/Lonely0710/todo-app-rn" />
  <img alt="gitHubtoplanguage" src="https://img.shields.io/github/languages/top/Lonely0710/todo-app-rn" />
  <img alt="issues" src="https://img.shields.io/github/issues/Lonely0710/todo-app-rn" />
</p>

>[!note]
> **前言：** 
> 本项目是基于 YouTube 上 Codesistency 的 **[React Native for Absolute Beginners](https://www.youtube.com/watch?v=jdfNnNccDt0)** 教程进行的实践开发。通过完整跟随教程，我系统学习了 React Native 的开发流程，从环境搭建到应用发布的全过程。
> 基于本项目，我从零开始构建了一个功能完整的待办事项应用，涵盖了从基础 UI 搭建到复杂状态管理的完整开发流程。

## 技术栈

<div align="center">
  <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151014560.svg" width="60" alt="React Native">
  <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151014561.svg" width="60" alt="Expo">
  <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151014548.svg" width="225" alt="Convex">
</div>

<p align="center">
React Native 0.79 + Expo 53 + Convex
</p>

## 功能特性

✅ 完整的CRUD操作  
✅ 日夜主题切换  
✅ 数据持久化存储  
✅ 动画交互效果  
✅ 响应式设计  

## 功能展示

### 1. Todos

| 功能         | 日间模式                                                                                           | 夜间模式                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 待办事项列表 | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001240.png" width="300"> | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001090.png" width="300"> |
| 空状态       | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001125.png" width="300"> | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001951.png" width="300"> |
| 编辑         | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001172.png" width="300"> | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001004.png" width="300"> |
| 删除         | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001380.png" width="300"> |                                                                                                    |

### 2. Settings

| 功能     | 日间模式                                                                                           | 夜间模式                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 进度统计 | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001343.png" width="300"> | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001898.png" width="300"> |
| 偏好设置 | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001307.png" width="300"> | <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151001812.png" width="300"> |

## 安装运行

1. 克隆仓库

```bash
git clone https://github.com/Lonely0710/todo-app-rn-beginner.git
cd todo-app-rn-beginner
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器

您需要**两个终端窗口**来分别启动前端和后端服务：

  * **终端 1 - 启动 Expo 前端:**

    ```bash
    npx expo start
    ```

  * **终端 2 - 启动 Convex 后端:**

    ```bash
    npx convex dev
    ```

### 4\. 选择运行平台

在启动 Expo 前端（终端 1）后，根据提示选择您希望运行应用的平台：

  * 在 **Android 模拟器/设备**上运行：按 `a`
  * 在 **iOS 模拟器/设备**上运行：按 `i`
  * 在 **Web 浏览器**中运行：按 `w`

## 项目结构

```
.
├── app/                  # 应用主入口
│   ├── (tabs)/           # 底部导航栏页面
│   │   ├── index.tsx     # 主页
│   │   └── settings.tsx  # 设置页
├── assets/               # 静态资源
│   └── styles/           # 样式文件
│       ├── home.styles.ts
│       └── settings.styles.ts
├── components/           # 公共组件
├── convex/               # Convex 后端服务
├── hooks/                # 自定义 Hooks
└── ios/                  # iOS 原生项目文件
```

## 参考资源

<div align="left"> <p> <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151029944.svg" width="20" alt="YouTube"> <a href="https://www.youtube.com/watch?v=jdfNnNccDt0">React Native for Absolute Beginners</a> </p> <p> <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151014561.svg" width="20" alt="Expo"> <a href="https://docs.expo.dev">Expo官方文档</a> </p> <p> <img src="https://lonelynotes-images.oss-cn-beijing.aliyuncs.com/202507151045211.svg" width="20" alt="Convex"> <a href="https://docs.convex.dev">Convex官方文档</a> </p> </div>
