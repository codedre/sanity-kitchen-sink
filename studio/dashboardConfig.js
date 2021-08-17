export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611bd77b0955e94867f2a9ea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fajo5wk6',
                  apiId: '7289a173-98b5-4cf7-9f05-3f272aa65cd4'
                },
                {
                  buildHookId: '611bd77bc8b22c42fbb25a8c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g1wooiju',
                  apiId: '78a04846-5fde-4fe6-bb5b-a6334796ccf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codedre/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g1wooiju.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
