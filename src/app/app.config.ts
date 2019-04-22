export const AppConfig: any = {
    name: "Debug",
    display: "Debug",
    appName: "Debug",
    brandId: "debug",
    inactiveSessionDuration: 840000,
    version: "0.0.1",
    release: "0.01",
    scheme: "https",
    host: "debug",
    environment: "dev",
    regex: {
        password: /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    },
    tabs: false,
    browserSupport: {
        chrome: 48,
        fireFox: 45,
        ie: 11
    }
};