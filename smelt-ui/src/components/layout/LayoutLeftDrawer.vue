<template>
  <q-drawer v-model="isOpened" bordered side="left" :width="250" persistent>
    <q-scroll-area class="h-full">
      <q-list separator>
        <q-item
          active
          clickable
          v-ripple
          active-class="dark:bg-primary dark:text-white font-semibold"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section> Overview </q-item-section>
        </q-item>

        <q-item clickable v-ripple active-class="dark:bg-primary dark:text-white font-semibold">
          <q-item-section avatar>
            <q-icon name="manage_search" />
          </q-item-section>

          <q-item-section> Maintained </q-item-section>
        </q-item>

        <q-item clickable v-ripple active-class="dark:bg-primary dark:text-white font-semibold">
          <q-item-section avatar>
            <q-icon name="rule" />
          </q-item-section>

          <q-item-section> Checkers </q-item-section>
        </q-item>

        <q-item clickable v-ripple active-class="dark:bg-primary dark:text-white font-semibold">
          <q-item-section avatar>
            <q-icon name="insights" />
          </q-item-section>

          <q-item-section> Statistics & reports </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-list class="absolute-bottom">
      <q-item clickable v-ripple @click="toggle">
        <q-item-section avatar>
          <q-icon :name="isDark ? 'light_mode' : 'dark_mode'" />
        </q-item-section>

        <q-item-section>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { useDarkmode } from '@/composables/darkmode'
import { useLayoutDrawer } from '@/composables/drawer'

const { isOpened } = useLayoutDrawer()
const { isDark, toggle } = useDarkmode()
</script>

<style lang="css" scoped></style>
