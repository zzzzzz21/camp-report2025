module.exports = {
  files: ['dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js'],
  open: 'external',
  external: true,
  startPath: 'special/camp-report2025/',
  watch: true,
  server: {
    baseDir: 'dist',
    https: true,
  },
  notify: false,
};
