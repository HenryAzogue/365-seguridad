interface ImportMetaEnv {
  readonly NUMBER_BOSS: number;
  
  // add more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}