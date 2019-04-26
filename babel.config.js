module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: ['react-native'],
  plugins: [
    'transform-decorators-legacy',
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    
  ]
  
};
