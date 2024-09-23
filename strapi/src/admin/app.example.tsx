// Define a type for the 'app' object, or use 'unknown' if you are unsure
type App = {
  // Add properties and methods that are relevant to 'app' if you know them
  use?: (...args: any[]) => void;
};

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // More locales...
    ],
  },
  bootstrap(app: App) {
    console.log(app);
  },
};
