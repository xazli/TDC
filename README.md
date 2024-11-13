<h1 align="center">TDC</h1>

<p align="center">书签分类不够细？书签与浏览器过度绑定以至于被浏览器牵着鼻子走？多端同步？</p>
<p align="center">Tags-driven Collector，标签驱动的收集器，浏览器书签的替代品，帮助您摆脱书签与浏览器强绑定的痛苦，实现真正的多端同步</p>

| PC | 移动端 |
| :---: | :---: |
| ![TDCpc](https://img.picgo.net/2024/11/11/TDCpc10ae908c385d605f.png) | ![TDCmobile](https://img.picgo.net/2024/11/11/TDCmobile47c581fd394c964d.jpg) |


## Deployment

### 准备工作

1. 【创建仓库】点击此处👉[通过模板创建仓库](https://github.com/new?template_name=TDC&template_owner=fenglingback)

2. 【启用Pages】在仓库的 `Settings` 中 `Pages->Build and deployment->Source` 下面选择 `Github Actions`。

<hr>

### 通过issues导入书签

> [!IMPORTANT]  
> 首先需要修改render.py，把 `username = fenglingback` 和 `repo_name = TDC` 中的 `fenglingback` 和 `TDC` 分别替换为你的用户名和仓库名后保存。


1. 点击 `Issues`，然后点击 `New issue` 新建一个issue，每个issue就是一个书签

2. 填写 `title`，内容是书签名，例如：`Github`

3. 选填 `description`，格式为：书签链接[两个换行]书签描述，例如：

    ```
    https://github.com

    代码托管平台，资源库
    ```

> [!NOTE]  
> 书签描述是 `可选的`，不填的话就不会显示。

4. 右边的 `Labels` 的 `⚙` 中添加已有的标签。如果想要添加新标签，在其中的 `Filter labels` 搜索框中输入新标签的名称，然后点击 `Create new label` 就好了

5. 管理标签可以在 `Issues` 页面中点击 `Labels`，可以对标签进行新增、编辑、删除等操作


### 触发构建书签页面

仓库页面star你的仓库，然后再取消star，这样就会触发action自动构建你的书签页面。

## 书签页面地址

在仓库的 `Settings` 中的 `Pages` 页面有一个 `Visit site` 的按钮，点击它就可以访问你的书签页面了，你也可以把地址保存到本地方便访问。