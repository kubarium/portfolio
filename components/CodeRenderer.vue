<script setup lang='ts'>
import { javascript } from '@codemirror/lang-javascript';
import { Decoration, EditorView, ViewPlugin } from '@codemirror/view';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';

const props = defineProps<{
  file: string,
  highlightLines?: number[]
}>()

function lineHighlighter(lines: number[]) {
  return ViewPlugin.fromClass(class {
    decorations
    constructor(view: EditorView) {
      this.decorations = Decoration.set(
        lines.map(line => {
          const lineInfo = view.state.doc.line(line)
          return Decoration.line({ class: "cm-highlighted-line" }).range(lineInfo.from)
        })
      )
    }
  }, {
    decorations: v => v.decorations
  })
}
const extensions = [
  javascript(), indentationMarkers(),
  lineHighlighter(props.highlightLines || [])
]

let code = ref("")
const { data } = await useFetch(`/api/code-renderer?file=${props.file}`)
code.value = data.value?.payload || ""
</script>
<template>
  <NuxtCodeMirror v-model="code" :read-only="true" :extensions="extensions" :basic-setup="true" />
</template>
<style>
.cm-highlighted-line {
  background: rgba(255, 255, 0, 0.2);
  /* yellow highlight */
}
</style>