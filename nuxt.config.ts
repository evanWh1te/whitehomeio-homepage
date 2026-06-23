/** @format */

import type { NuxtConfig } from 'nuxt/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    compatibilityDate: '2025-01-01',
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
                },
            ],
        },
    },
} satisfies NuxtConfig;
