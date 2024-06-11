if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

console.log(protocol);
console.log(hostname);
console.log(port);
console.log(pathname);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
     { 
        protocol: "http",
        hostname: hostname,
        port,
      },
     { 
        protocol: "http",
        hostname: '*.gravatar.com',
        port: '',
      },
    ],
  },
};
