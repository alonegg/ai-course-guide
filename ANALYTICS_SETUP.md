# Google Analytics 4 & Google Tag Manager 配置指南

本项目已集成Google Analytics 4 (GA4)和Google Tag Manager (GTM)访问统计功能，本文档将指导您完成配置。

## 📋 概述

### GA4 vs GTM

**Google Analytics 4 (GA4)**：
- 直接的网站分析工具
- 适合基础的页面浏览和事件跟踪
- 配置相对简单

**Google Tag Manager (GTM)**：
- 标签管理系统，可管理多种跟踪代码
- 支持更复杂的事件跟踪和条件触发
- 无需修改代码即可添加新的跟踪标签
- 支持A/B测试、转化跟踪等高级功能

本项目同时集成了两者，GTM作为主要的标签管理工具，GA4作为数据分析后端。

## 🚀 快速开始

### 方案选择

**推荐方案**：使用GTM + GA4组合（已配置）
- GTM容器ID：`GTM-MRB8DSJF`
- 支持灵活的事件管理和标签配置
- 便于后续添加其他跟踪工具

**备选方案**：仅使用GA4（需要环境变量配置）
- 适合简单的分析需求
- 需要手动配置测量ID

## 🏷️ Google Tag Manager 配置

### 1. 创建GTM账户

1. 访问 [Google Tag Manager](https://tagmanager.google.com/)
2. 使用Google账户登录
3. 点击「创建账户」
4. 填写账户信息：
   - **账户名称**：AI学习指南网站
   - **国家/地区**：选择您的国家
5. 设置容器：
   - **容器名称**：AI学习指南
   - **目标平台**：选择「网页」

### 2. 获取GTM代码

创建容器后，您将获得两段代码：

**Head代码**（已集成到项目中）：
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRB8DSJF');</script>
<!-- End Google Tag Manager -->
```

**Body代码**（已集成到项目中）：
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRB8DSJF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### 3. 在GTM中配置GA4

1. 在GTM工作区中，点击「标记」→「新建」
2. 选择「Google Analytics: GA4 配置」
3. 输入您的GA4测量ID（G-XXXXXXXXXX）
4. 设置触发条件为「All Pages」
5. 保存并发布容器

### 4. 创建Google Analytics账户

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 使用Google账户登录
3. 点击「开始测量」创建新账户
4. 填写账户信息：
   - **账户名称**：AI学习指南网站
   - **数据共享设置**：根据需要选择

### 2. 创建GA4媒体资源

1. 在账户设置完成后，创建媒体资源
2. 填写媒体资源信息：
   - **媒体资源名称**：AI学习指南
   - **报告时区**：选择您的时区
   - **货币**：选择相应货币
3. 选择业务信息（教育类别）

### 3. 设置数据流

1. 选择「网站」作为平台
2. 填写网站信息：
   - **网站网址**：您的网站域名
   - **数据流名称**：AI学习指南网站
3. 点击「创建数据流」

### 4. 获取测量ID

创建数据流后，您将获得一个测量ID，格式为：`G-XXXXXXXXXX`

## ⚙️ 项目配置

### 1. 设置环境变量

1. 复制 `.env.example` 文件为 `.env`：
   ```bash
   cp .env.example .env
   ```

2. 编辑 `.env` 文件，替换测量ID：
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   > 将 `G-XXXXXXXXXX` 替换为您的实际测量ID

### 2. 更新HTML文件

编辑 `index.html` 文件，将其中的 `GA_MEASUREMENT_ID` 替换为您的实际测量ID：

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. 重新构建项目

```bash
pnpm run build
```

## 📊 跟踪功能说明

### 自动跟踪事件

项目已配置以下自动跟踪事件：

#### 页面浏览
- **事件名称**：`page_view`
- **触发时机**：用户访问页面时
- **参数**：页面路径、页面标题

#### 导航交互
- **事件名称**：`scroll_to_section`
- **触发时机**：用户点击导航菜单或Logo时
- **参数**：目标区域名称

#### 搜索行为
- **事件名称**：`search`
- **触发时机**：用户使用搜索功能时
- **参数**：搜索关键词

#### 快速导航
- **事件名称**：`quick_nav_click`
- **触发时机**：用户点击快速导航卡片时
- **参数**：导航项目名称

#### 工具交互
- **事件名称**：`tool_click`
- **触发时机**：用户点击AI工具卡片时
- **参数**：工具名称、工具类别

#### 链接点击
- **事件名称**：`link_click`
- **触发时机**：用户点击外部链接时
- **参数**：链接URL、链接文本

#### 按钮交互
- **事件名称**：`button_click`
- **触发时机**：用户点击各种按钮时
- **参数**：按钮名称、所在区域

#### 模板复制
- **事件名称**：`template_copy`
- **触发时机**：用户复制提示词模板时
- **参数**：模板名称

### 隐私保护

#### Cookie同意机制
- 首次访问时显示Cookie同意横幅
- 用户可选择接受或拒绝分析Cookie
- 选择记录在本地存储中
- 符合GDPR等隐私法规要求

#### 数据匿名化
- 不收集个人身份信息
- IP地址自动匿名化
- 所有数据仅用于网站优化

## 📈 查看分析数据

### 1. 访问GA4控制台

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 选择您的媒体资源
3. 查看实时报告和历史数据

### 2. 重要报告

#### 实时报告
- 当前在线用户数
- 实时页面浏览
- 实时事件触发

#### 受众群体报告
- 用户数量和会话数
- 用户地理位置
- 设备和浏览器信息

#### 行为报告
- 页面浏览量
- 用户流程
- 事件统计

#### 自定义事件分析
- 搜索关键词统计
- 工具点击排行
- 模板使用情况

## 🔧 高级配置

### 自定义事件

如需添加新的跟踪事件，可使用 `analytics` 工具：

```typescript
import { analytics } from './utils/analytics';

// 跟踪按钮点击
analytics.trackButtonClick('按钮名称', '区域名称');

// 跟踪自定义事件
analytics.trackEvent('custom_event', {
  custom_parameter: 'value'
});
```

### 转化目标设置

在GA4控制台中设置转化目标：

1. 进入「配置」→「事件」
2. 找到要设为转化的事件
3. 开启「标记为转化」

推荐转化事件：
- `tool_click`：工具使用
- `template_copy`：模板复制
- `link_click`：外部链接访问

### 受众群体细分

创建自定义受众群体：

1. 进入「配置」→「受众群体」
2. 点击「新建受众群体」
3. 设置条件，例如：
   - 活跃用户：最近7天有访问
   - 工具用户：点击过工具链接
   - 搜索用户：使用过搜索功能

## 🚨 故障排除

### 常见问题

#### 1. 数据不显示
- 检查测量ID是否正确
- 确认网站已部署最新版本
- 等待24小时数据处理时间

#### 2. 事件不触发
- 检查浏览器控制台是否有错误
- 确认用户已同意Cookie
- 验证事件代码是否正确

#### 3. Cookie横幅不显示
- 清除浏览器本地存储
- 检查是否已做过选择
- 确认组件正确导入

### 调试模式

#### GTM调试

1. **GTM预览模式**：
   - 在GTM工作区中点击「预览」
   - 访问您的网站，查看标签触发情况
   - 检查dataLayer事件和变量

2. **GTM助手扩展**：
   - 安装 [Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) 浏览器扩展
   - 启用录制模式访问网站
   - 查看所有标签的触发状态

#### GA4调试

1. 安装 [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) 浏览器扩展
2. 访问网站并打开开发者工具
3. 查看控制台中的GA事件日志

#### DataLayer调试

在浏览器控制台中输入以下命令查看dataLayer：
```javascript
// 查看当前dataLayer内容
console.log(window.dataLayer);

// 监听dataLayer变化
window.dataLayer.push = function() {
  console.log('DataLayer Push:', arguments);
  Array.prototype.push.apply(window.dataLayer, arguments);
};
```

## 📝 最佳实践

### 1. 数据质量
- 定期检查数据准确性
- 设置数据过滤器排除内部流量
- 监控异常数据波动

### 2. 隐私合规
- 保持Cookie政策更新
- 提供清晰的数据使用说明
- 尊重用户选择权

### 3. 性能优化
- 异步加载GA脚本
- 避免过度跟踪影响性能
- 定期清理无用事件

## 🔧 GTM高级配置

### 自定义事件配置

在GTM中创建自定义事件标签：

1. **创建触发器**：
   - 类型：自定义事件
   - 事件名称：如 `button_click`、`tool_click` 等
   - 添加条件过滤特定事件

2. **创建标签**：
   - 类型：Google Analytics: GA4 事件
   - 配置标记：选择您的GA4配置标记
   - 事件名称：使用变量 `{{Event}}`
   - 添加自定义参数

### 转化跟踪设置

1. **在GTM中设置转化事件**：
   - 创建GA4事件标签
   - 事件名称：`conversion`
   - 添加参数：`value`、`currency` 等

2. **在GA4中标记转化**：
   - 进入GA4控制台
   - 配置 → 事件 → 标记为转化

### 电子商务跟踪

如需添加电子商务跟踪：

```javascript
// 购买事件示例
window.dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '12345',
    value: 25.42,
    currency: 'USD',
    items: [{
      item_id: 'SKU123',
      item_name: 'AI工具订阅',
      category: 'subscription',
      quantity: 1,
      price: 25.42
    }]
  }
});
```

## 📊 GTM事件跟踪说明

### 已配置的DataLayer事件

项目中的 `analytics.ts` 文件会自动推送以下事件到dataLayer：

- `button_click` - 按钮点击
- `link_click` - 链接点击
- `tool_click` - 工具卡片点击
- `search` - 搜索行为
- `scroll_to_section` - 区域滚动
- `template_copy` - 模板复制
- `quick_nav_click` - 快速导航点击
- `consent_granted` - 同意Cookie
- `consent_denied` - 拒绝Cookie

### 事件参数说明

每个事件都包含以下标准参数：
- `event_category` - 事件类别
- `event_label` - 事件标签
- `value` - 事件值（可选）
- 其他自定义参数

## 📞 技术支持

如遇到配置问题，请：

1. **GTM相关**：查看 [Google Tag Manager帮助中心](https://support.google.com/tagmanager/)
2. **GA4相关**：查看 [Google Analytics帮助中心](https://support.google.com/analytics/)
3. **项目相关**：检查项目的GitHub Issues
4. **技术支持**：联系项目维护者

## 🚨 GTM故障排除

### 常见GTM问题

#### 1. GTM容器未加载
- 检查网络连接和防火墙设置
- 确认GTM代码正确放置在HTML中
- 查看浏览器控制台是否有错误

#### 2. 事件未触发
- 使用GTM预览模式检查触发器
- 验证dataLayer事件是否正确推送
- 检查触发器条件设置

#### 3. GA4数据不显示
- 确认GA4标签配置正确
- 检查测量ID是否有效
- 等待数据处理时间（最多24小时）

#### 4. DataLayer错误
- 检查JavaScript语法错误
- 确认事件参数格式正确
- 使用浏览器控制台调试

### 性能优化建议

1. **异步加载**：GTM代码已配置为异步加载
2. **事件节流**：避免频繁触发相同事件
3. **数据清理**：定期清理无用的标签和触发器
4. **版本管理**：使用GTM版本功能管理变更

---

**注意**：请确保遵守当地的数据保护法规，如GDPR、CCPA等。在收集用户数据前，务必获得适当的同意。