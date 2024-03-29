# 介绍
>赛事系统是集 **赛事发布、赛事报名、赛事编排、成绩录入、荣誉颁奖、数据查询** 为一体的综合管理系统，是智慧教育平台的重要组成部分之一。

当前主要分为三大模块：
- 基础配置
    - 赛事项目
    - 场地资源
    - 裁判人员
- 赛事管理 **（比赛前）**
    - 发布
    - 报名
    - 分组
    - 编排
- 成绩管理 **（比赛后）**
    - 录入
    - 颁奖
    - 查询

---
## 基础配置
>基础配置是保证赛事系统顺利高效运行的基础模块，主要涉及体育赛事相关的 **比赛项目**、**比赛场地**、**比赛裁判** 三大子模块，将一场赛事编排过程中所涉及到的项目、场地和裁判进行统一管理，方便后续的智能化高效编排工作开展。

### 赛事项目库
***赛事项目*** 是指一场体育赛事中所涉及的具体比赛项目。
本系统中的体育赛事项目分为 *【一级项目】* 和 *【二级项目】*，一级项目为系统内置，用户<mark>不可修改</mark>；每一个一级项目下为二级项目，支持用户自定义创建，用户在创建赛事时即可选择自己所创建的二级项目。

二级项目创建时，需要<mark>保证唯一</mark> *（项目名和类型与其他二级项目不可重复）*

### 场地资源库
***场地资源库*** 是体育赛事可选可用的比赛场地集合，本系统将比赛场地资源分为 *【自有场地】* 和 *【公共场地】*  两部分；其中<mark>公共场地由区管理员维护</mark>，校级管理员均可查看及在赛事编排中选用，<mark>自有场地由各校校管理员自行维护</mark>，区管理员可查看选用。


### 裁判库
***裁判库*** 是体育赛事编排中的裁判人员集合，裁判员信息中的资质裁判项目将决定其在编排过程中能否被选择。裁判库由各管理员<mark>各自维护</mark>自己所在单位的裁判名单，数据不互通。

---

## 业务模块
>业务模块指赛事系统的核心流程，在系统中分属 ***赛事管理*** 和 ***成绩管理*** 两大模块，我们可以按照业务流程将赛事流程分为 **赛事发布**、**赛事报名**、**赛事编排（含分组）**、**成绩录入**、**荣誉颁发**；其中前三项为比赛前的环节，属于赛事管理模块，后两项属于比赛后环节，属于成绩管理模块。


### 赛事发布
***赛事发布*** 属于赛事管理模块，是赛事流程的第一步。新增/发布一场赛事主要涉及到新建赛事名称、包含项目和主办方承办方等多个基础信息，其中 *【赛事项目】* 、*【赛事日期】* 和 *【承办方】* 三项信息较为重要：
- 赛事项目决定了之后新建比赛组别时可选的具体比赛项目（二级项目）
- 赛事日期决定了之后不同组别比赛时间的可选范围
- 承办方信息决定了之后用户在编排比赛秩序过程中可选的场地等。赛事创建者可在赛事开始前对比赛场地信息进行配置完善。

赛事列表按可按照不同的赛事状态进行分别展示，未开始的赛事，创建者可以编辑修改赛事基础信息。

所有用户<mark>点击卡片</mark>即可进入赛事详情页，进行后续操作。

### 赛事报名
***赛事报名*** 分为两部分，创建 **比赛组别** 和 **比赛报名**：
*【比赛组别】* 是基于具体比赛项目（二级项目）所创建的分组（例：男子篮球甲组），比赛报名也是基于比赛组别的维度进行报名。
*【比赛报名】* 是比赛前的重要环节，也是传统线下体育赛事组织中的较为繁琐的环节。在本系统中，赛事创建者可以自行开启或关闭报名。
- 报名<mark>开启</mark>的情况下，用户可以通过下载报名模版进行批量导入，多次导入报名模板，生效的报名信息将以<mark>最新导入的</mark>excel表内容为准，导入后可以进入具体的比赛组别编排页面对自己导入的参赛人员信息进行进一步编辑。
- 报名<mark>关闭</mark>情况下，仅赛事创建者（编排人）可以对参赛人员进行编辑（注：开始正式编排后如果修改参赛人员信息，可能会导致之前的编排信息被清理需要重新开始编排）。

报名模板表头如下（具体要求见下载模板内注释）：

|比赛组别  ｜  领队 ｜ 领队电话 ｜ 教练名 ｜ 教练电话 ｜ 所属单位 ｜ 参赛队伍名 ｜ 选手号码 ｜ 选手姓名 ｜ 身份证号
-
赛事创建人（编排人）可以在编排页面中标记种子队伍，标记后队名呈绿色。

### 赛事编排
***比赛编排*** 共分为5个步骤，操作上实际包含了 **比赛阶段配置、比赛分组、确定对阵框架、确定场次秩序**4个关键步骤。
1. 比赛阶段
   这一环节主要为了确定比赛整体框架，确定积分规则和具体比赛阶段（可以理解为通常的轮次）信息（阶段名、晋级人数、赛制），由此<mark>确定整体的比赛框架和节奏</mark>
2. 抽签分组
   抽签分组支持自定义组数后一键自动分组，预先标记的种子选手将默认被分到不同的组；分组后可进行重排或者个别调整。
3. 编排对阵
   编排对阵是对比赛框架的进一步细化，赛事编排者需要确定每轮的晋级秩序，设定不同轮次的对阵队伍。
4. 比赛秩序
   比赛秩序阶段需要确定所有比赛场次的对阵信息，包括预计的对阵时间、场地和裁判信息；本阶段支持批量操作（可点击批量操作按钮后，选择需要操作的条目，选择或输入相应的信息即可）。
5. 完成
   需要用户对编排内容进行确认，固定版本。


### 成绩录入
***成绩录入*** 属于成绩管理模块，成绩录入主要包含用户对于某个比赛组别中，具体场次的比赛结果录入
1. 通过下拉或输入关键词后检索选择需要录入的赛事
2. 选择需要录入的比赛组别
3. 根据当前的赛事进度一览，选择比赛阶段和分组，分场次录入比赛结果（可补充上传现场的照片等）
4. 比赛分组所包含的比赛全部录入完成后，可判定该组的晋级的队伍

### 荣誉颁发
***荣誉颁发*** 本系统中荣誉共分为三类：比赛成绩类、体育精神类、赛事支持类；其中比赛成绩类按类型可分为团体和单项。

比赛成绩（单项）最终颁奖操作在该比赛项目的录入页面中进行；其他类型的荣誉在【成绩管理】的具体比赛页面中进行颁发及编辑（比赛成绩单项获奖也将同步于此页面进行展示）。

### 成绩查询
***成绩管理*** 共包含成绩录入（前文）和成绩查询两大模块，用户在成绩查询模块中可对比赛、荣誉和潜力运动员的相关信息进行查询。