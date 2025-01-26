async function loadConfig() {

    const themeModule = await import('./theme.mjs');

    const currentHour = new Date().getHours();

    if (currentHour <= 18) {
        return themeModule.setLightTheme();
    }
    else {
        return themeModule.setDarkTheme();
    }
}

loadConfig();