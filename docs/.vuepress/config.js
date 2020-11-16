const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Oktonine documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    //logo: '/guide/img/oktonine.png',
    nav: [
      {
        text: 'Guides',
        link: '/guide/',
      },
      {
        text: 'Oktonine',
        link: 'https://www.oktonine.com'
      }
    ],
    sidebar: {
      '/guide/': [
        /*{
          title: 'Get started',
          collapsable: true,
          children: [
            '/guide/oktonine/The_concept',
            '/guide/oktonine/Main_features',
            '/guide/oktonine/First_steps',
          ]
        },*/
        {
          title: 'For Teachers & School'+"'"+'s Manager',
          collapsable: true,
          children: [
            '/guide/manager/Users_accounts',
            '/guide/manager/Methodology_creation',
            '/guide/manager/Competencyframework_creation',
            '/guide/manager/Call_creation',
            '/guide/manager/Challenges_types',
            '/guide/manager/Challenge_reception',
            '/guide/manager/Project_creation',
            '/guide/manager/Team_creation',
            '/guide/manager/Manager_discussions',
            '/guide/manager/Institution_settings',
          ]
        },
        /*{
          title: 'Teacher'+"'"+'s guide',
          collapsable: true,
          children: [
            '/guide/teacher/Users_accounts',
            '/guide/teacher/Methodology_creation',
            '/guide/teacher/Competencyframework_creation',
            '/guide/teacher/Call_creation',
            '/guide/teacher/Challenges_types',
            '/guide/teacher/Challenge_reception',
            '/guide/teacher/Project_creation',
            '/guide/teacher/Team_creation',
            '/guide/teacher/Teacher_discussions',
            ]
        },*/
        {
          title: 'For Entreprises',
          collapsable: true,
          children: [
            '/guide/entreprise/Account_creation',
            '/guide/entreprise/Challenge_proposal',
            '/guide/entreprise/Challenges_types',
            '/guide/entreprise/Teams_coaching',
          ]
        },
        {
          title: 'For Students',
          collapsable: true,
          children: [
            '/guide/student/Coming_soon',
          // '/guide/student/Account_creation',
          // '/guide/student/Challenges_projects',
          // '/guide/student/Teams_workspace',
          // '/guide/student/Student_discussions',
          ]
        },
        {
          title: 'FAQs',
          collapsable: true,
          children: [
            '/guide/qa/Coming_soon',            
           /* '/guide/qa/General_questions',
            '/guide/qa/Teachers_questions',
            '/guide/qa/Managers_questions',
            '/guide/qa/Students_questions',
            '/guide/qa/Entreprises_questions', */
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
