declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}