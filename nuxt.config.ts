// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ludus Globi",
      titleTemplate: "%s | Ludos Globi 🌎",
      link: [
        {rel: 'icon', type: 'image/png', href:'./favicon.png'}
      ],
      meta: [
        {name: 'description', content: 'Bem-vindo ao Ludus Globi, onde a geografia encontra desafios divertidos e aprendizado interativo! Embarque em uma jornada emocionante pelo mundo enquanto testa seus conhecimentos de bandeiras, países, capitais e muito mais.'}
      ]
    }
  }
})
