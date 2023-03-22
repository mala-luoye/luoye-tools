import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd51'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd91'),
    routes: [
      {
        path: '/docs/category1/fun1',
        component: ComponentCreator('/docs/category1/fun1', '98b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category2/fun2',
        component: ComponentCreator('/docs/category2/fun2', 'ad0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '43c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
