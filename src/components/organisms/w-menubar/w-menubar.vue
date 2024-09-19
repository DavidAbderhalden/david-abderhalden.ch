<script lang="ts" setup>
import Menubar, { type MenubarPassThroughOptions } from 'primevue/menubar';
import type { WMenubarProps } from '@/components/organisms/w-menubar/w-menubar.types';

const props = defineProps<WMenubarProps>();
const menubarPassThroughOptions: MenubarPassThroughOptions = {
  root: {
    class: 'w-menubar',
  },
  rootList: {
    class: 'w-menubar__items',
  }
}

</script>

<template>
  <Menubar
    :model="props.items"
    :pt="menubarPassThroughOptions"
  >
  </Menubar>
</template>

<style lang="scss" src="./w-menubar.scss" scoped />