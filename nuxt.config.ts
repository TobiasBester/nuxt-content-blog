// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
            ]
        }
    },
    content: {
        markdown: {
            anchorLinks: {
                depth: 3,
            }
        }
    },
    build: {
        transpile: ['@heroicons/vue']
    },
    plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
