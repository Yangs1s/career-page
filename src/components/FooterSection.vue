<script setup>
defineProps({
  profileName: String
})
</script>

<template>
  <footer class="footer">
    <p>&copy; 2025 {{ profileName }}. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-dark);
  color: var(--text-muted);
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--border);
}
</style>

