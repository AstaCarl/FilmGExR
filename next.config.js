/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wise-approval-1b4d22b6f0.media.strapiapp.com',
        port: '',
      },
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'videos/[name].[ext]',
          publicPath: '/',
        },
      },
    });
    return config;
  },
};
