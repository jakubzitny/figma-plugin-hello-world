

const pageCount = figma.root.children.length
const frameCount = figma.root.children.reduce((count: number, page: PageNode) => {
  const frames = page.children.filter((pageChild: SceneNode) => {
    return pageChild.type === 'FRAME'
  })

  return count + frames.length
}, 0)

figma.closePlugin(`There are ${pageCount} pages and ${frameCount} artboards 🎨`)
