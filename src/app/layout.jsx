import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Vincent Vo',
    default: 'Vincent Vo - Personal Portfolio',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="bg-neutral-100 text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
