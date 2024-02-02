/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/**'
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.digi-api.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig

/*
  Config
  i18n: {
    // These are all the locales you want to support in
    // Your application
    locales: ['default', 'pt-BR', 'en-US', 'fr'],
    // This is the default locale you want to be used when visiting
    // A non-locale prefixed path e.g. `/hello`
    defaultLocale: 'default',

      When localeDetection is set to false Next.js will no longer
      automatically redirect based on the user's preferred locale
      and will only provide locale information detected
      from either the locale based domain or locale path
      as described above.

    localeDetection: true,
    // This is a list of locale domains and the default locale they
    // Should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'pt-BR',
      },
      {
        domain: 'example.eu',
        defaultLocale: 'en-US',
        // Specify other locales that should be redirected
        // To this domain
        locales: ['en'],
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
        // An optional http field can also be used to test
        // Locale domains locally with http instead of https
        http: true,
      },
    ],
  },
  */
