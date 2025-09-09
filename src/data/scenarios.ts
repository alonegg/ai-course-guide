import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'academic',
    title: '学术研究 & 论文写作',
    description: '文献检索、论文写作、数据分析等学术场景的AI工具应用',
    painPoints: [
      '文献浩如烟海，读不过来，找不到重点',
      '写论文没思路，开头和框架最难憋',
      '数据和引用格式整理起来太繁琐'
    ],
    tools: ['kimi', 'deepseek', 'doubao', 'tongyi'],
    examples: [
      '使用Kimi进行文献调研和选题讨论',
      '通过秘塔AI搜索查找专业资料',
      '利用天工智能体生成研究报告',
      '使用AI工具进行文献结构化解析'
    ]
  },
  {
    id: 'classroom',
    title: '课堂学习 & 报告演讲',
    description: '课堂笔记、PPT制作、概念理解等学习场景的AI辅助',
    painPoints: [
      '一节课信息量太大，笔记记不过来，课后懒得复习',
      '做PPT演讲，内容组织和页面设计耗时耗力',
      '遇到复杂概念（高数、编程、哲学），老师讲了也听不懂',
      '小组作业，会议内容乱七八糟，任务分配不清'
    ],
    tools: ['coze', 'tiangong', 'doubao'],
    examples: [
      '使用通义听悟或飞书妙记整理会议录音',
      '通过扣子空间制作PPT',
      '利用AI解释复杂的学术概念',
      '自动生成会议摘要和待办事项'
    ]
  },
  {
    id: 'club',
    title: '社团活动 & 创意设计',
    description: '活动策划、海报设计、宣传文案等社团工作的AI应用',
    painPoints: [
      '活动宣传文案、海报设计，没有灵感和设计基础',
      '需要为活动生成一些有趣的图片或视频素材',
      '活动策划缺乏创意和系统性思考'
    ],
    tools: ['jimeng', 'keling', 'doubao', 'deepseek'],
    examples: [
      '使用即梦生成活动海报和宣传图片',
      '通过可灵制作活动宣传视频',
      '利用AI策划完整的社团活动方案',
      '生成吸引人的活动文案和宣传语'
    ]
  },
  {
    id: 'skill',
    title: '技能提升 & 简历优化',
    description: '个人技能学习、简历制作、面试准备等职业发展场景',
    painPoints: [
      '不知道如何系统性地学习新技能',
      '简历写作缺乏亮点和专业性',
      '面试准备不充分，回答问题缺乏逻辑',
      '职业规划不清晰，缺乏方向感'
    ],
    tools: ['chatgpt', 'deepseek', 'kimi', 'tongyi'],
    examples: [
      '制定个性化的学习计划和路径',
      '优化简历内容和格式',
      '模拟面试问答和准备',
      '分析行业趋势和职业发展方向'
    ]
  }
];