import Markdown from 'markdown-it'
import hljs from 'highlight.js'

const md = new Markdown({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code>${hljs.highlight(lang, str.trim(), true).value}</code></pre>`
    }
    return `<pre class="hljs"><code>${md.utils.scapeHtml(lang, str.trim())}</code></pre>`
  },
})

const snippet = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    getterMethods: {
      excerpt() {
        return this.content.length > 120
          ? `${this.content.substring(0, this.content.lastIndexOf(' ', 120))}...`
          : this.content
      },
      formattedContent() {
        return md.render(this.content)
      },
    },
  })

  Snippet.associete = (models) => {
    Snippet.belongsTo(models.Category)
  }

  return Snippet
}

export default snippet
