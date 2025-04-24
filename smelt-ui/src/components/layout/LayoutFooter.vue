<template>
  <q-footer class="bg-[#343a40] p-3 text-white flex flex-wrap gap-5">
    <a
      class="text-white"
      href="https://gitlab.suse.de/tools/smelt/-/releases"
      target="_blank"
      rel="noopener noreferrer"
      title="Release Notes"
    >
      SMELT v3.39.1
    </a>
    <a
      v-for="item in navItems"
      :key="item.href"
      class="text-gray"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      :title="item.title ?? item.text"
    >
      <q-icon v-if="item.icon" :name="item.icon" />
      {{ item.text }}
    </a>
  </q-footer>
</template>

<script setup lang="ts">
const navItems = [
  {
    href: 'https://tools.io.suse.de/smelt/',
    text: 'Documentation'
  },
  {
    href: 'https://gitlab.suse.de/tools/smelt',
    text: 'Gitlab'
  },
  {
    href: 'https://confluence.suse.com/pages/viewpage.action?pageId=570066519',
    title: "department's wiki",
    text: 'Maintenance Documentation'
  },
  {
    href: 'https://jira.suse.com/secure/CreateIssue.jspa?&pid=24490',
    text: 'Maintenance Service Center',
    icon: 'desktop_windows'
  },
  {
    class: 'nav-link',
    href: 'mailto:maint-coord@suse.de',
    text: 'maint-coord@suse.de',
    icon: 'email'
  },
  {
    class: 'nav-link',
    href: 'https://suse.slack.com/messages/discuss-maintenance',
    target: '_blank',
    rel: 'noopener noreferrer',
    title: 'Slack channel',
    text: '#discuss-maintenance',
    icon: 'forum'
  }
]
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
}
</style>
