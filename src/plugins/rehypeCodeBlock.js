import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export function rehypeCodeBlock() {
  return function (tree) {
    visit(tree, { tagName: 'pre' }, (node, index, parent) => {
      const child = node.children[0]
      if (!child || child.type !== 'element' || child.tagName !== 'code' || !child.properties) {
        return
      }
      const classes = child.properties.className
      let lang = ''
      if (!classes) {
        node.children[0].properties = {
          className: ['language-text'],
        }
        lang = 'text'
      } else {
        lang = classes[0].slice(9)
      }

      if (lang === 'mermaid') {
        const mermaidNode = h(
          'div',
          {
            class:
              'mermaid-wrapper group relative my-8 flex justify-center overflow-x-auto rounded-xl bg-secondary/10 hover:bg-secondary/20 p-6 transition-all duration-300 border border-secondary/20 shadow-sm cursor-zoom-in',
          },
          [
            h(
              'pre',
              {
                class:
                  'mermaid select-none text-center font-sans opacity-0 transition-opacity duration-300',
              },
              child.children,
            ),
          ],
        )
        parent.children[index] = mermaidNode
        return
      }

      const codeBlock = h(
        'div',
        {
          class: 'code-block',
        },
        [h('span', { class: 'lang-tag' }, lang), node],
      )

      parent.children[index] = codeBlock
    })
  }
}
