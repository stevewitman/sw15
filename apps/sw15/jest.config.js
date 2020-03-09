module.exports = {
  name: 'sw15',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw15',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
