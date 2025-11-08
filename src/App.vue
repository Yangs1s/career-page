<script setup>
import { useTheme } from './composables/useTheme'

// 앱 전역에서 테마 초기화
useTheme()
</script>

<template>
  <RouterView />
</template>

<style>
</style>
