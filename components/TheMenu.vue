<script setup lang="ts">
import TheMenu from '@/data/TheMenu.yaml';
</script>
<template>
  <Menu :model="TheMenu" class="w-64" :pt="{ item: { class: 'leading-5' } }">
    <template #start>
      <div class="flex flex-col justify-center items-center gap-2 p-2">
        <div class="inline-flex items-center gap-1 p-2">
          <Avatar image="https://gravatar.com/userimage/91219185/5f3c764df471978a2e0645a22f363d2d.jpeg" class="mr-2"
            size="xlarge" shape="circle" />
          <span class="text-2xl font-semibold">Kumsal Obuz</span>
        </div>
        <ButtonGroup>
          <Button aria-label="Steam" size="" class="p-button-icon">
            <Icon name="fa6-brands:steam-symbol" />
          </Button>
          <Button aria-label="Amazon" icon="pi pi-amazon" size="" class="p-button-icon" />
          <Button aria-label="GitHub" icon="pi pi-github" size="" class="p-button-icon" />
          <Button aria-label="LinkedIn" icon="pi pi-linkedin" size="" class="p-button-icon" />
          <Button aria-label="YouTube" icon="pi pi-youtube" size="" class="p-button-icon" />
          <Button aria-label="Resume" icon="pi pi-file-pdf" size="" class="p-button-icon" />
          <Button aria-label="Email" icon="pi pi-envelope" size="" class="p-button-icon" />
        </ButtonGroup>
      </div>
    </template>
    <template #submenulabel="{ item }">
      <span class="font-bold">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
    <template #end>
      <div class="flex flex-col items-center gap-2 p-2">
        <a href="https://www.codementor.io/@kubarium?refer=badge" target="_blank">
          <img src="https://www.codementor.io/m-badges/kubarium/im-a-cm-g.svg" alt="Codementor badge">
        </a>
      </div>
    </template>
  </Menu>
</template>

<style lang="css" scoped>
.p-button-icon {
  max-width: fit-content;
  padding: 5px 8px;
}
</style>