import { defineMDPlugin } from '../index'
import {Slugger} from 'marked'

export default defineMDPlugin({
  heading(text, level, raw) {
    const slugger = new Slugger()
    const tagName = `h${level}`
    const sluggerText = slugger.slug(raw);

    return `<${tagName} class='anchor-point' id='${sluggerText}'>
      <a href='#${sluggerText}'>#</a>
      ${raw}
    </${tagName}>`
  }
}, [
  '/src/builder/marked-plugins/header.client.ts'
])
