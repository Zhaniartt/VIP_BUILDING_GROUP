export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f74d143fd981a010fd7b2d7',
                  title: 'Sanity Studio',
                  name: 'vip-building-group-studio',
                  apiId: '839b9199-c983-4e22-aa55-508b006bd0fc'
                },
                {
                  buildHookId: '5f74d1431d7d8a00bc2569d7',
                  title: 'Landing pages Website',
                  name: 'vip-building-group',
                  apiId: '62898c60-41b2-463a-b0b4-2e603a64341c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zhaniartt/VIP_BUILDING_GROUP',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vip-building-group.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
