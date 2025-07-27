<script setup lang='ts'>
const props = defineProps<{
  tags: string[]
}>()
const tagsSorted = props.tags.slice().sort((a, b) => {
  const aIsLower = a[0] === a[0].toLowerCase();
  const bIsLower = b[0] === b[0].toLowerCase();
  if (aIsLower && !bIsLower) return -1;
  if (!aIsLower && bIsLower) return 1;
  return a.localeCompare(b);
});
</script>
<template>
  <Tag v-for="tag in tagsSorted" :key="tag" :value="tag" severity="info" />
</template>