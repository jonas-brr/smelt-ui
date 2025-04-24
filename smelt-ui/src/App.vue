<template>
  <q-layout view="HHH Lpr fff">
    <layout-header />

    <layout-left-drawer />

    <q-page-container>
      <router-view />
    </q-page-container>

    <layout-footer />
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import LayoutLeftDrawer from '@/components/layout/LayoutLeftDrawer.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
</script>
