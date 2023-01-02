
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'table', component: () => import('pages/Table.vue') },
      { path: 'practiceVfor', component: () => import('pages/Vfor_practice.vue') },
      { path: 'practiceComposition', component: () => import('pages/Composition_Practice.vue') },
      { path: 'memoComposition', component: () => import('pages/Memo_Composition.vue') },
      { path: 'practice4', component: () => import('pages/Practice4.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
