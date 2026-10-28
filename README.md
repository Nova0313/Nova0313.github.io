# 钱辰个人网站

基于 Astro 的静态个人网站，目标部署地址为 `https://nova0313.github.io/`。

## 本地运行

需要 Node.js 24（见 `.nvmrc`）。

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## 更新内容

- 个人链接、邮箱与简历路径：`src/data/site.ts`。邮箱和简历字段为空时，不渲染对应链接。请先确认新版简历 PDF，再放入 `public/` 并填写路径。
- 论文：`src/data/site.ts` 中的 `papers`。
- 详情案例：`src/content/cases/*.md`。页面由内容集合静态生成。
- 首页栏目与摘要：`src/pages/index.astro`。
- 首页默认显示可点击的像素小窝；顶部导航进入独立栏目页，右上角的“长页浏览”按钮展开完整首页内容。小窝热点文案位于 `src/pages/index.astro`，栏目长页内容集中在 `src/components/LongContent.astro`。
- 照片：确认可公开后放入 `public/images/`，在相应栏目增加图片与替代文字。

`profile-site-brief.md`、`references/`、内部资料及旧版简历不会提交到仓库。`public/images/studio-pixel.png` 是本项目生成并经过低分辨率像素处理的原创素材。案例卡片中的几何图形仅作装饰，不代表产品截图。

## 部署

将源码提交到 `Nova0313/Nova0313.github.io` 的 `main` 分支，仓库 Pages 发布来源设为 GitHub Actions。`.github/workflows/deploy.yml` 会在推送或手动触发后构建与发布。仓库名为用户站点，因此不设置 Astro `base`。
