<template>
  <q-header class="bg-[#0b332b] text-white pos-fixed shadow dark:shadow-white/3" elevated>
    <!-- The main constant header -->
    <q-toolbar class="flex justify-between">
      <!-- brand -->
      <a class="active" href="/">
        <q-avatar size="32px">
          <img alt="Smelt logo" src="@/assets/logo.svg" style="transform: translateY(-4px)" />
        </q-avatar>
        <span class="ml-1 text-[1.2rem]">Maintenance</span>
      </a>

      <!-- the main search box -->
      <q-input standout dark dense v-model="search" placeholder="Search" class="w-md">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- user login info, possibly clickable -> dropdown, right drawer -->
      <q-btn-dropdown
        color="primary"
        flat
        text-color="white"
        no-caps
        label="John"
        icon="person"
        dense
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>Logged in as <strong>John Doe</strong></q-item-label>
              <q-item-label class="text-xs text-gray">Session exipires in 20mins</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>

    <!-- the second header, breadcrumbs, possibly dynamic content based on the current page -->
    <q-toolbar class="light:bg-white light:text-dark dark:bg-black flex">
      <q-btn dense flat :icon="isOpened ? 'close' : 'menu'" @click="toggle" />
      <q-separator vertical class="my-3 ml-2 mr-5" />
      <breadcrumbs />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useLayoutDrawer } from '@/composables/drawer'
import { ref } from 'vue'

import Breadcrumbs from '@/components/Breadcrumbs.vue'

const { isOpened, toggle } = useLayoutDrawer()

const search = ref()
</script>

<style lang="css" scoped>
a {
  color: white;
  opacity: 0.6;
  text-decoration: none;
  transition: opacity 0.1s ease-in-out;
}

.active,
a:hover {
  opacity: 1;
}
</style>
