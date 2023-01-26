const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@main': path.join(
        path.resolve(__dirname, './src/components/main-content')
      ),
      '@data': path.join(path.resolve(__dirname, './src/data')),
      '@navigation': path.join(
        path.resolve(__dirname, './src/components/navigation')
      ),
      '@shared': path.join(path.resolve(__dirname, './src/components/shared')),
      '@styled': path.join(
        path.resolve(__dirname, './src/components/styled-components')
      ),
      '@themes': path.join(path.resolve(__dirname, './src/themes')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@styles': path.join(path.resolve(__dirname, './src/styles')),
      '@context': path.join(path.resolve(__dirname, './src/context')),
    },
  },
};
