import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/luoye-tools-docs/markdown-page',
    component: ComponentCreator('/luoye-tools-docs/markdown-page', '95b'),
    exact: true
  },
  {
    path: '/luoye-tools-docs/docs',
    component: ComponentCreator('/luoye-tools-docs/docs', 'ae6'),
    routes: [
      {
        path: '/luoye-tools-docs/docs/category1/fun1',
        component: ComponentCreator('/luoye-tools-docs/docs/category1/fun1', 'c27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luoye-tools-docs/docs/category2/fun2',
        component: ComponentCreator('/luoye-tools-docs/docs/category2/fun2', '023'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luoye-tools-docs/docs/intro',
        component: ComponentCreator('/luoye-tools-docs/docs/intro', 'f31'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luoye-tools-docs/',
    component: ComponentCreator('/luoye-tools-docs/', '527'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
