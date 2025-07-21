<script setup lang='ts'>
</script>
<template>
  <div class="flex flex-row p-2 gap-2  h-screen">
    <div class="flex flex-col gap-2 items-center justify-between">
      <TheMenu class="border-4 h-full" />
      <div class="flex flex-col gap-2 items-center">

        <ButtonGroup class="">
          <Button aria-label="Amazon" icon="pi pi-amazon" class="p-button-icon" />
          <Button aria-label="GitHub" icon="pi pi-github" class="p-button-icon" />
          <Button aria-label="LinkedIn" icon="pi pi-linkedin" class="p-button-icon" />
          <Button aria-label="Email" icon="pi pi-envelope" class="p-button-icon" />
          <Button aria-label="YouTube" icon="pi pi-youtube" class="p-button-icon" />
          <Button aria-label="Steam" class="p-button-icon">
            <Icon name="fa6-brands:steam-symbol" />
          </Button>
        </ButtonGroup>
        <Button label="Download Resume" class="w-full" icon="pi pi-file-pdf" severity="info" as="a"
          href="/Kumsal Obuz - Resume.pdf" target="_blank" />
        <a href="https://www.codementor.io/@kubarium?refer=badge" target="_blank">
          <img src="https://www.codementor.io/m-badges/kubarium/im-a-cm-g.svg" alt="Codementor badge">
        </a>
      </div>
    </div>
    <NuxtPage />

  </div>
</template>