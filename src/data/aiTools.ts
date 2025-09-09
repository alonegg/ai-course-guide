import { AITool } from '../types';

export const aiTools: AITool[] = [
  // 语言模型
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'language',
    description: '强大的中文大语言模型，擅长对话、写作、编程',
    features: ['对话交流', '文本生成', '代码编写', '逻辑推理'],
    link: 'https://deepseek.com',
    icon: '🧠',
    detailedDescription: '你可以把它想象成一个"超级学霸"的大脑，它学习了互联网上几乎所有的公开文本，精通语言、逻辑、推理和代码。'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'language',
    description: 'OpenAI开发的大语言模型，全球最知名的AI助手',
    features: ['对话交流', '文本生成', '翻译', '创意写作'],
    link: 'https://chat.openai.com',
    icon: '💬',
    detailedDescription: '全球最知名的AI助手，在各种语言任务上表现出色。'
  },
  {
    id: 'doubao',
    name: '豆包',
    category: 'language',
    description: '字节跳动推出的AI助手，支持多模态交互',
    features: ['对话交流', '文档分析', '图片理解', '语音交互'],
    link: 'https://www.doubao.com',
    icon: '🎒',
    detailedDescription: '字节跳动推出的多模态AI助手，支持文字、图片、语音等多种交互方式。'
  },
  {
    id: 'kimi',
    name: 'Kimi',
    category: 'language',
    description: 'Moonshot AI开发的长文本AI助手，擅长文档分析',
    features: ['长文本处理', '文档分析', '网络搜索', '多轮对话'],
    link: 'https://kimi.moonshot.cn',
    icon: '📚',
    detailedDescription: '擅长处理长文本和文档分析，支持网络搜索功能。'
  },
  {
    id: 'tongyi',
    name: '通义千问',
    category: 'language',
    description: '阿里云推出的大语言模型，支持多种应用场景',
    features: ['对话交流', '文本生成', '代码编写', '知识问答'],
    link: 'https://tongyi.aliyun.com',
    icon: '🔮',
    detailedDescription: '阿里云推出的大语言模型，在多种应用场景下表现优秀。'
  },

  // 视觉模型
  {
    id: 'jimeng',
    name: '即梦',
    category: 'vision',
    description: '字节跳动推出的AI绘图工具，支持文生图和图生图',
    features: ['文生图', '图生图', '风格转换', '高清放大'],
    link: 'https://jimeng.jianying.com',
    icon: '🎨',
    detailedDescription: '如果说语言模型是"学富五车"的学者，那视觉模型就是"才华横溢"的艺术家。'
  },
  {
    id: 'keling',
    name: '可灵',
    category: 'vision',
    description: '快手推出的AI视频生成工具，支持文本生成视频',
    features: ['文生视频', '图生视频', '视频编辑', '特效生成'],
    link: 'https://klingai.kuaishou.com',
    icon: '🎬',
    detailedDescription: '快手推出的AI视频生成工具，能够根据文本描述生成高质量视频。'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'vision',
    description: '知名的AI绘图工具，以艺术性和创意著称',
    features: ['艺术创作', '概念设计', '风格多样', '高质量输出'],
    link: 'https://midjourney.com',
    icon: '🖼️',
    detailedDescription: '以艺术性和创意著称的AI绘图工具，深受设计师和艺术家喜爱。'
  },

  // 音频模型
  {
    id: 'suno',
    name: 'Suno',
    category: 'audio',
    description: 'AI音乐生成工具，可以根据描述创作音乐',
    features: ['AI作曲', '歌词生成', '多种风格', '完整歌曲'],
    link: 'https://suno.ai',
    icon: '🎵',
    detailedDescription: '能让AI拥有"能说会唱"的本领，根据你的要求直接创作一段音乐。'
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    category: 'audio',
    description: '国产AI音频生成平台，支持语音合成和音乐创作',
    features: ['语音合成', '声音克隆', 'AI配音', '音效生成'],
    link: 'https://www.minimaxi.com',
    icon: '🔊',
    detailedDescription: '国产AI音频生成平台，在语音合成和音乐创作方面表现出色。'
  },

  // 智能体
  {
    id: 'manus',
    name: 'Manus',
    category: 'agent',
    description: '智能体平台，可以自动化完成复杂任务',
    features: ['任务自动化', '工具调用', '多步骤执行', '智能决策'],
    link: 'https://www.manus.chat',
    icon: '🤖',
    detailedDescription: '你只需要一句命令，智能体就可以调用网络搜索、代码工具、画图等等工具，一起完成一个任务。'
  },
  {
    id: 'tiangong',
    name: '天工智能体',
    category: 'agent',
    description: '昆仑万维推出的智能体平台，支持多种AI能力整合',
    features: ['智能搜索', '文档生成', '数据分析', '任务规划'],
    link: 'https://www.tiangong.cn',
    icon: '⚡',
    detailedDescription: '昆仑万维推出的智能体平台，能够整合多种AI能力完成复杂任务。'
  },
  {
    id: 'coze',
    name: 'Coze空间',
    category: 'agent',
    description: '字节跳动推出的智能体开发平台',
    features: ['智能体创建', '工作流设计', '插件集成', '对话管理'],
    link: 'https://www.coze.cn',
    icon: '🛠️',
    detailedDescription: '字节跳动推出的智能体开发平台，让用户可以轻松创建自己的AI助手。'
  }
];