import { editorLocalization } from "survey-creator-core";

var simplifiedChineseTranslation = {
  // strings for survey templates
  survey: {
    edit: "编辑",
    externalHelpLink: "教学小片",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "从左侧工具箱拖个问题",
    copy: "复制",
    addToToolbox: "添加到工具箱",
    deletePanel: "删除面板",
    deleteQuestion: "删除题目",
    convertTo: "转变为",
    drag: "拖放元件"
  },
  // strings for question types
  qt: {
    default:
      "默认",
    checkbox: "多项选择",
    comment: "多行文本",
    imagepicker: "选图片",
    dropdown: "下拉框",
    file: "文件上传",
    html: "Html 代码",
    matrix: "矩阵 (单选题)",
    matrixdropdown: "矩阵 (下拉框)",
    matrixdynamic: "矩阵 (动态问题)",
    multipletext: "文本框组",
    panel: "面板",
    paneldynamic: "面板(动态)",
    radiogroup: "单项选择",
    rating: "评分",
    text: "单行文本",
    boolean: "逻辑项",
    expression: "表达式(只读)",
    flowpanel: "流面板"
  },
  // strings for editor
  ed: {
    defaultLocale: "默认语言 ({0})",
    survey: "调查问卷",
    settings: "问卷设置",
    opjectPropertiesHeader: "高级",
    showObjectProperties: "显示属性",
    hideObjectProperties: "隐藏属性",
    editSurvey: "修改",
    addNewPage: "添加新页面",
    moveRight: "滚动到右侧",
    moveLeft: "滚动到左侧",
    deletePage: "删除页面",
    editPage: "编辑页面",
    edit: "编辑",
    newPageName: "页面",
    newQuestionName: "问题",
    newPanelName: "面板",
    newTextItemName: "文本",
    testSurvey: "测试问卷",
    testSurveyAgain: "再次测试问卷",
    testSurveyWidth: "问卷宽度: ",
    embedSurvey: "将问卷嵌入网页",
    translation: "转换",
    saveSurvey: "保存问卷",
    designer: "问卷设计器",
    jsonEditor: "JSON 编辑器",
    undo: "撤销",
    redo: "恢复",
    options: "选项",
    generateValidJSON: "生成 JSON 数据",
    generateReadableJSON: "生成易读的 JSON 数据",
    toolbox: "工具箱",
    toolboxGeneralCategory: "一般",
    delSelObject: "删除所选对象",
    editSelObject: "编辑所选对象",
    correctJSON: "请修正 JSON 数据",
    surveyResults: "问卷结果: ",
    surveyResultsTable: "表格形式",
    surveyResultsJson: "JSON形式",
    resultsTitle: "问题标题",
    resultsName: "问题名称",
    resultsValue: "答案名称",
    resultsDisplayValue: "显示答案",
    modified: "已修改",
    saving: "保存中...",
    saved: "已保存",
    saveError: "错误，未保存",
    translationAddLanguage: "语言选择",
    translationShowAllStrings: "全部名词",
    translationShowAllPages: "全部页面",
    translationNoStrings: "未翻译，重新选",
    translationExportToSCVButton: "导出CSV",
    translationImportFromSCVButton: "导入CSV",
    translationMergeLocaleWithDefault: "同默认合并 {0} ",
    bold: "加粗",
    italic: "斜体",
    underline: "下划线",
    addNewQuestion: "添加问题",
    completedHtmlOnConditionItemText: "显示 if:"
  },
  //Property names in table headers
  pel: {
    isRequired: "是否为必填项?"
  },
  // strings for property editors
  pe: {
    apply: "应用",
    ok: "确定",
    cancel: "取消",
    reset: "重置",
    close: "关闭",
    delete: "删除",
    addNew: "新建",
    addItem: "添加项...",
    addOther: "其他",
    addSelectAll: "全选",
    addNone: "无",
    removeAll: "全部删除",
    edit: "编辑器",
    itemValueEdit: "Visible If",
    editChoices: "编辑选项",
    move: "移动",
    empty: "<空>",
    notEmpty: "<编辑值>",
    fastEntry: "快速输入",
    formEntry: "表单输入",
    testService: "测试服务",
    conditionSelectQuestion: "选择问题...",
    conditionValueQuestionTitle: "选择值",
    conditionButtonAdd: "添加",
    conditionButtonReplace: "替换",
    conditionHelp: "请输入一个布尔表达式。当布尔值为真，问题/页面可见。例如：{question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp: "请输入一项条件判断。当条件判断为真时问题/页面将可见。例如: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
    aceEditorHelp: "trl+space公式补完提示",
    aceEditorRowTitle: "当前行",
    aceEditorPanelTitle: "当前面板",
    showMore: "更多细节请查看文档",
    conditionShowMoreUrl: "https://surveyjs.io/Documentation/LibraryParameter?id=Question¶meter=visibleIf",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "至少有1行",
    propertyIsEmpty: "请为该属性设定一个值",
    value: "值",
    text: "显示文本",
    rowid: "行号",
    imageLink: "图片链接",
    columnEdit: "编辑列: {0}",
    itemEdit: "编辑选项: {0}",
    url: "URL",
    path: "路径",
    valueName: "值名",
    titleName: "标题名",
    showOtherItem: "可添加其他答案?",
    otherText: "其他答案文本",
    showNoneItem: "无",
    noneText: "无文本",
    showSelectAllItem: "有全选项",
    selectAllText: "选择全部文本",
    choicesMin: "选项最小值",
    choicesMax: "选项最大值",
    choicesStep: "选项间隔",
    name: "题目名",
    title: "题目文本",
    cellType: "单元格类型",
    colCount: "列数",
    choicesOrder: "设置选项顺序",
    visible: "是否可见?",
    isRequired: "是否为必填项?",
    requiredErrorText: "错误文字",
    startWithNewLine: "问题是否新起一行?",
    rows: "文本框行数",
    placeholder: "占位文本",
    showPreview: "是否显示图像预览?",
    storeDataAsText: "以 JSON 文本方式存储文件",
    maxSize: "文件最大尺寸 (Bytes)",
    imageHeight: "图片高度",
    imageWidth: "图片宽度",
    rowCount: "默认行数",
    columnLayout: "列布局",
    addRowLocation: "添加行按钮位置",
    addRowText: "添加条目按钮文本",
    removeRowText: "删除条目按钮文本",
    rateMin: "最小评分",
    rateMax: "最大评分",
    rateStep: "评分间隔",
    minRateDescription: "最小值提示",
    maxRateDescription: "最大值提示",
    inputType: "文本框类型",
    optionsCaption: "下拉框提示语",
    defaultValue: "默认值",
    cellsDefaultRow: "Default cells texts",
    surveyEditorTitle: "问卷设置",
    qEditorTitle: "编辑问题: {0}",
    maxLength: "最大长度",
    showTitle: "显示/隐藏 标题",
    locale: "默认语言",
    mode: "模式 (编辑/只读)",
    clearInvisibleValues: "清除隐藏值",
    cookieName: "Cookie名，避免多次运行)",
    sendResultOnPageNext: "切换页时保存结果",
    storeOthersAsComment: "其他值单独储存",
    showPageTitles: "显示页面标题",
    showPageNumbers: "显示页数",
    pagePrevText: "前一页按钮文本",
    pageNextText: "后一页按钮文本",
    completeText: "完成按钮文本",
    startSurveyText: "开始按钮文本",
    showNavigationButtons: "显示导航按钮 (默认导航)",
    showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
    firstPageIsStarted: "调查的第一页面为起始页.",
    showCompletedPage: "结尾展示完成后的页面 (completedHtml)",
    goNextPageAutomatic: "回答本页所有问题后，自动跳转到下一页",
    showProgressBar: "显示进度条",
    questionTitleLocation: "问题的标题位置",
    requiredText: "问题必填标志",
    questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
    showQuestionNumbers: "显示问题编号",
    questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
    questionErrorLocation: "问题错误定位",
    focusFirstQuestionAutomatic: "改变页面时聚焦在第一个问题",
    questionsOrder: "页内问题顺序",
    maxTimeToFinish: "完成调查的最长时间",
    maxTimeToFinishPage: "完成调查中页面的最长时间",
    showTimerPanel: "显示计时器面板",
    showTimerPanelMode: "显示计时器面板模式",
    renderMode: "渲染模式",
    allowAddPanel: "允许添加面板",
    allowRemovePanel: "允许删除面板",
    panelAddText: "添加面板文本",
    panelRemoveText: "删除面板文本",
    isSinglePage: "在一个页面上展示所有元素",
    html: "Html",
    expression: "公式",
    minValue: "最小值",
    maxValue: "最大值",
    minLength: "最小长度",
    allowDigits: "允许的位数",
    minCount: "最小数量",
    maxCount: "最大数量",
    regex: "正则表达式",
    totalText: "总文本",
    totalType: "总类型",
    totalExpression: "总公式",
    totalDisplayStyle: "总显示风格",
    totalCurrency: "总currency",
    totalFormat: "总格式",
    tabs: {
      general: "一般",
      navigation: "导航",
      question: "问题",
      completedHtml: "完成后的Html",
      loadingHtml: "加载中的Html",
      timer: "问卷计时器",
      trigger: "触发器",
      fileOptions: "选项",
      html: "HTML 编辑器",
      columns: "设置列",
      rows: "设置行",
      choices: "设置选项",
      visibleIf: "设置可见条件",
      enableIf: "设置有效条件",
      rateValues: "设置评分值",
      choicesByUrl: "通过 URL 导入选项",
      matrixChoices: "默认选项",
      multipleTextItems: "文本输入",
      validators: "校验规则"
    },
    editProperty: "编辑属性: '{0}'",
    items: "[ 项目数量: {0} ]",
    enterNewValue: "请设定值",
    noquestions: "问卷中还没有创建任何问题",
    createtrigger: "请创建触发器",
    triggerOn: "当 ",
    triggerMakePagesVisible: "使页面可见:",
    triggerMakeQuestionsVisible: "使问题可见:",
    triggerCompleteText: "如果满足条件，则完成问卷",
    triggerNotSet: "触发器尚未设置",
    triggerRunIf: "满足下列条件时执行",
    triggerSetToName: "修改下列问题值: ",
    triggerFromName: "复制值: ",
    triggerRunExpression: "运行公式:",
    triggerSetValue: "修改为: ",
    triggerIsVariable: "在问卷提交结果中不要包含该变量"
  },
  pv: {
    true: "真",
    false: "假",
    inherit: "继承",
    show: "显示",
    hide: "隐藏",
    default:
      "默认",
    initial: "初始化",
    random: "随机",
    collapsed: "折叠",
    expanded: "扩展",
    none: "无",
    asc: "升序",
    desc: "降序",
    indeterminate: "indeterminate",
    decimal: "数字",
    currency: "货币",
    percent: "百分数",
    firstExpanded: "firstExpanded",
    off: "关闭",
    onPanel: "面板上",
    onSurvey: "问卷上",
    list: "列表",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "水平",
    vertical: "垂直",
    top: "顶",
    bottom: "底",
    topBottom: "顶和底",
    left: "左",
    color: "颜色",
    date: "日期",
    datetime: "时间",
    "datetime-local": "时间格式",
    email: "email",
    month: "月",
    number: "数字",
    password: "密码",
    range: "范围",
    tel: "电话",
    text: "text",
    time: "时间",
    url: "url",
    week: "周",
    hidden: "隐藏",
    on: "开",
    onPage: "页面上",
    edit: "编辑",
    display: "仅显示",
    onComplete: "完成时",
    onHidden: "隐藏中",
    all: "全部",
    page: "页",
    survey: "问卷",
    onNextPage: "下一页时",
    onValueChanged: "值变动时"
  },
  // strings for operators
  op: {
    empty: "为空",
    notempty: "不为空",
    equal: "等于",
    notequal: "不等于",
    contains: "包含",
    notcontains: "不包含",
    anyof: "任意",
    allof: "全部",
    greater: "大于",
    less: "小于",
    greaterorequal: "大于等于",
    lessorequal: "小于等于"
  },
  // strings for embed window
  ew: {
    angular: "使用 Angular 时",
    jquery: "使用 JQuery 时",
    knockout: "使用 Knockout 时",
    react: "使用 React 时",
    vue: "使用 Vue 时",
    bootstrap: "使用 Bootstrap 时",
    standard: "不使用 Bootstrap 时",
    showOnPage: "嵌入页面显示",
    showInWindow: "使用单独的问卷窗口",
    loadFromServer: "从服务器加载问卷 JSON 数据",
    titleScript: "脚本和样式",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  ts: {
    selectPage: "选择测试页",
    showInvisibleElements: "显示隐藏元件"
  },
  validators: {
    answercountvalidator: "数量检查",
    emailvalidator: "Email",
    expressionvalidator: "公式",
    numericvalidator: "数字",
    regexvalidator: "正则表达式",
    textvalidator: "文本"
  },
  triggers: {
    completetrigger: "完成问卷",
    setvaluetrigger: "设置问题值",
    copyvaluetrigger: "复制值",
    runexpressiontrigger: "运行公式",
    visibletrigger: "修改可见性"
  },
  // strings of properties
  p: {
    name: "名字",
    title: {
      name: "标题",
      title: "如果与名字相同，请设置为空值"
    },
    navigationButtonsVisibility: "导航按钮可见",
    questionsOrder: "页面中元素的顺序",
    maxTimeToFinish: "完成调查的最长时间",
    visible: "可见",
    visibleIf: "条件可见",
    questionTitleLocation: "问题的标题位置",
    description: "说明",
    state: "状态",
    isRequired: "必选",
    requiredIf: "是否必选",
    indent: "缩进",
    requiredErrorText: "必填错误",
    startWithNewLine: "允许问题在新行",
    innerIndent: "缩进",
    page: "所在页面",
    width: "宽度",
    commentText: "备注文本",
    valueName: "值名",
    enableIf: "设置有效条件",
    defaultValue: "默认值",
    correctAnswer: "正确答案",
    readOnly: "只读",
    validators: "有效性",
    titleLocation: "标题位置",
    showCommentArea: "有备注",
    showOtherItem: "允许其他答案",
    choices: "选项",
    choicesOrder: "选项排序",
    choicesByUrl: "Url选项",
    otherText: "其他答案文本",
    otherErrorText: "其他错误",
    storeOthersAsComment: "其他值单独储存",
    label: "标签",
    showTitle: "显示/隐藏 标题",
    valueTrue: "选是的值",
    valueFalse: "不选的值",
    cols: "列",
    rows: "行",
    placeholder: "占位",
    optionsCaption: "optionsCaption",
    expression: "公式",
    format: "格式",
    displayStyle: "显示风格",
    currency: "货币",
    useGrouping: "useGrouping",
    showPreview: "预览",
    allowMultiple: "允许多选",
    imageHeight: "图高",
    imageWidth: "图宽",
    storeDataAsText: "文本方式存储文件",
    maxSize: "最大号",
    html: "html",
    columns: "columns",
    cells: "单元",
    isAllRowRequired: "所有行必填",
    horizontalScroll: "滚动",
    cellType: "单元格类型",
    columnsLayout: "列布局",
    columnColCount: "列数",
    columnMinWidth: "列最小宽度",
    rowCount: "行数",
    minRowCount: "最小行数",
    maxRowCount: "最大行数",
    keyName: "键值名",
    keyDuplicationError: "键值重复",
    confirmDelete: "确认删除",
    confirmDeleteText: "确认删除文本",
    addRowLocation: "添加行位置",
    addRowText: "添加行文本",
    removeRowText: "删除文本",
    items: "items",
    itemSize: "itemSize",
    colCount: "列数",
    templateTitle: "模板标题",
    templateDescription: "模板描述",
    allowAddPanel: "允许添加面板",
    allowRemovePanel: "允许删除面板",
    panelCount: "面板数",
    minPanelCount: "最小面板数",
    maxPanelCount: "最大面板数",
    panelsState: "panelsState",
    panelAddText: "添加面板文本",
    panelRemoveText: "删除面板文本",
    panelPrevText: "前一项文字",
    panelNextText: "下一项文字",
    showQuestionNumbers: "显示问题编号",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "渲染模式",
    templateTitleLocation: "模板标题位置",
    rateValues: "打分值",
    rateMin: "最小分",
    rateMax: "最大分",
    rateStep: "分值间距",
    minRateDescription: "最小分描述",
    maxRateDescription: "最大分描述",
    inputType: "inputType",
    size: "size",
    locale: "默认语言",
    focusFirstQuestionAutomatic: "改变页面时聚焦在第一个问题",
    completedHtml: "完成后的Html",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "加载页面",
    triggers: "触发器",
    cookieName: "Cookie名，避免多次运行)",
    sendResultOnPageNext: "切换页时保存结果",
    showNavigationButtons: "显示导航按钮 (默认导航)",
    showPrevButton: "显示前一页按钮 (用户可返回至前一页面)",
    showPageTitles: "显示页面标题",
    showCompletedPage: "结尾展示完成后的页面 (completedHtml)",
    showPageNumbers: "显示页数",
    questionErrorLocation: "问题错误定位",
    showProgressBar: "显示进度条",
    mode: "模式 (编辑/只读)",
    goNextPageAutomatic: "回答本页所有问题后，自动跳转到下一页",
    checkErrorsMode: "查错模式",
    clearInvisibleValues: "清除隐藏值",
    startSurveyText: "开始按钮文本",
    pagePrevText: "前一页按钮文本",
    pageNextText: "后一页按钮文本",
    completeText: "完成按钮文本",
    requiredText: "问题必填标志",
    questionStartIndex: "问题起始标志 (1, 2 or 'A', 'a')",
    questionTitleTemplate: "问题标题模板, 默认为: '{no}. {require} {title}'",
    firstPageIsStarted: "调查的第一页面为起始页.",
    isSinglePage: "在一个页面上展示所有元素",
    maxTimeToFinishPage: "完成调查中页面的最长时间",
    showTimerPanel: "显示计时器面板",
    showTimerPanelMode: "显示计时器面板模式",
    defaultPanelValue: "默认面板值",
    defaultRowValue: "默认行值",
    showNoneItem: "都不选项",
    noneText: "无文本",
    text: "文本",
    defaultVaule: "默认选项",
    "survey_title": {
      name: "标题",
      title: "问卷标题在每页上都会显示"
    },
    "page_title": {
      name: "标题",
      title: "页面标题"
    }
  }
};

editorLocalization.locales["zh-cn"] = simplifiedChineseTranslation;
