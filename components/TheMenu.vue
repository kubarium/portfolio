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
          <router-link class="text-2xl font-semibold no-underline!" to="/">Kumsal Obuz</router-link>
        </div>
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

    </template>
    <template #submenuitem="slotProps"></template>
  </Menu>
</template>