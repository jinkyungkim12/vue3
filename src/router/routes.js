
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
      { path: 'practice5', component: () => import('pages/MemberList.vue') },
      { path: 'memberList', component: () => import('pages/MemberList2.vue') },
      { path: 'memberForm', component: () => import('pages/MemberForm.vue') },
      { path: 'adminList', component: () => import('pages/AdminList.vue') },
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
