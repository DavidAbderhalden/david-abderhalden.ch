<script setup lang="ts">

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  selector: 'body',
  attribute: 'theme',
  valueDark: 'dark-mode',
  valueLight: 'light-mode',
});

const toggleDark: unknown = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()">Toggle Color Mode</button>
  <RouterView />
</template>
