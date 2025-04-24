<template>
  <q-breadcrumbs active-color="dark">
    <q-breadcrumbs-el
      class="link"
      active-class="link-active"
      v-for="crumb in breadcrumbs"
      :key="crumb.name"
      :to="crumb.to"
      :label="crumb.name"
    />
  </q-breadcrumbs>
</template>

<script setup lang="ts">
// todo: dynamic, probably using useRouter or a dedicated composable
const breadcrumbs = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Overview',
    to: '/overview'
  },
  {
    name: 'Requests Ready',
    to: '/overview/ready'
  }
]
</script>

<style lang="css" scoped>
.link {
  color: gray;
  transition: 0.1s ease-in-out;

  &:hover {
    color: var(--q-primary);
  }
}

.link-active {
  color: var(--q-primary);
  pointer-events: none;
}

.body--dark .link {
  color: gray;
  transition: 0.1s ease-in-out;

  &:hover {
    color: white;
  }
}

.body--dark .link-active {
  color: white;
  pointer-events: none;
}
</style>
