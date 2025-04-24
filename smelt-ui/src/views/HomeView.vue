<template>
  <main class="p-2">
    <q-table
      title="Maintenance requests ready"
      flat
      :rows="requests"
      :columns="columns"
      binary-state-sort
      v-model:pagination="pagination"
      row-key="name"
      @request="onRequest"
      :loading="loading"
      :rows-per-page-options="[100]"
    >
      <template v-slot:body-cell-category="props">
        <q-td auto-width>
          <q-icon
            size="16px"
            :name="getCategoryIcon(props.row.category.name).name"
            :color="getCategoryIcon(props.row.category.name).color"
          >
            <q-tooltip>{{ props.row.category.name }}</q-tooltip>
          </q-icon>
        </q-td>
      </template>
      <template v-slot:body-cell-codestreams="props">
        <q-td auto-width>
          <div class="flex flex-row-reverse justify-start flex-wrap gap-1">
            <q-badge
              class="font-600 text-xs"
              v-for="stream in props.row.codestreams"
              :key="stream"
              rounded
            >
              <span style="transform: translateY(1px)">
                {{ stream }}
              </span>
            </q-badge>
          </div>
        </q-td>
      </template>
    </q-table>
  </main>
</template>
<script setup lang="ts">
import { useSmeltApi } from '@/composables/smelt'
import type { Request } from '@/types/api'
import { type QTableColumn } from 'quasar'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { v1 } = useSmeltApi()

const loading = ref(true)
const requests = ref<Request[]>([])
const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: parseInt((router.currentRoute.value.query.page as string) ?? '1'),
  rowsPerPage: 100,
  rowsNumber: 10
})

async function loadData(nextPagination?: any) {
  console.info(nextPagination)
  const pageToFetch = nextPagination?.page ?? pagination.value.page
  loading.value = true
  try {
    const response = await v1.overview.released.get({ page: pageToFetch })
    requests.value = response.results

    pagination.value.page = pageToFetch
    pagination.value.rowsNumber = response.count
    router.push({ path: router.currentRoute.value.path, query: { page: pageToFetch } })
  } finally {
    setTimeout(() => (loading.value = false), 300)
  }
}

onMounted(() => loadData())

const onRequest = async (props: any) => loadData(props.pagination)

const columns: QTableColumn[] = [
  {
    name: 'category',
    required: true,
    label: 'Category',
    align: 'left',
    field: (row: Request) => row.category.name,
    format: (val: any) => `${val}`,
    sortable: false
  },
  {
    name: 'created',
    required: true,
    label: 'Created',
    align: 'left',
    field: (row: Request) => new Date(row.created).toDateString(),
    format: (val: any) => `${val}`,
    sortable: false
  },
  {
    name: 'id',
    required: true,
    label: 'Request ID',
    align: 'left',
    field: (row: Request) => row.request_id,
    format: (val: any) => `${val}`,
    sortable: false
  },
  {
    name: 'codestreams',
    required: true,
    label: 'Codestreams',
    align: 'right',
    field: (row: Request) => row.codestreams,
    format: (val: any) => `${val}`,
    sortable: false
  }
]

type Category = 'recommended' | 'security' | 'feature' | 'optional'
const getCategoryIcon = (category: Category) => {
  if (category === 'recommended') {
    return {
      name: 'bug_report',
      color: 'primary'
    }
  }

  if (category === 'security') {
    return {
      name: 'security',
      color: 'blue'
    }
  }

  if (category === 'feature') {
    return {
      name: 'star',
      color: 'gray'
    }
  }

  return {
    name: 'star',
    color: 'gold'
  }
}
</script>
