module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: ["feat", "fix", "docs", "chore", "style", "ci", "perf", "refactor", "test"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "body", "breaking"],
  scopes: [],
  types: {
    chore: {
      description: "构建过程及工具修改",
      emoji: "🛠",
      value: "chore"
    },
    ci: {
      description: "部署修改",
      emoji: "🛰",
      value: "ci"
    },
    docs: {
      description: "文档修改",
      emoji: "📖",
      value: "docs"
    },
    feat: {
      description: "新功能",
      emoji: "💎",
      value: "feat"
    },
    fix: {
      description: "bug修复",
      emoji: "🐞",
      value: "fix"
    },
    perf: {
      description: "性能提升",
      emoji: "⚡️",
      value: "perf"
    },
    refactor: {
      description: "代码重构",
      emoji: "💡",
      value: "refactor"
    },
    style: {
      description: "代码格式修改",
      emoji: "💿",
      value: "style"
    },
    test: {
      description: "测试",
      emoji: "🧪",
      value: "test"
    }
  },
  messages: {
    type: "选择要提交的类型:\n",
    customScope: "受影响的范围:\n",
    subject: "简短的描述:\n",
    body: "详细的描述:\n ",
    breaking: "列出破坏性更改:\n"
  }
}
