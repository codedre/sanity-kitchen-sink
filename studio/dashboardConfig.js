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
                  buildHookId: '5eb704476b524cfa1c591ff6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gib9k5q4',
                  apiId: '86916752-6a62-4fae-8d95-1673cbb96582'
                },
                {
                  buildHookId: '5eb7044789c051ea5134715f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vinemnnv',
                  apiId: 'c06105ea-cc03-47a8-8d24-0b4e3a69b3a8'
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
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vinemnnv.netlify.app', category: 'apps'}
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
