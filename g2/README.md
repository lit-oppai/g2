# g2 项目

这是一个使用 G2 图表库的项目。

## 项目结构

- **g2-source**: 这是一个 Git 子模块，包含 G2 图表库的源代码。
- **src/index.ts**: 应用程序的入口点，包含初始化 G2 图表的代码。
- **package.json**: npm 的配置文件，列出了项目的依赖项和脚本。
- **tsconfig.json**: TypeScript 的配置文件，指定编译选项和要包含在编译中的文件。

## 安装和使用

1. 克隆项目：
   ```
   git clone <repository-url>
   ```

2. 进入项目目录：
   ```
   cd g2
   ```

3. 初始化 Git 子模块：
   ```
   git submodule update --init --recursive
   ```

4. 安装依赖：
   ```
   npm install
   ```

5. 运行项目：
   ```
   npm start
   ```

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。