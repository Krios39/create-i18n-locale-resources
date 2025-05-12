import { resourcesEN } from "./resources/en";

declare module 'i18next' {
    interface CustomTypeOptions{ 
        defaultNS: 'languages',
        resources: typeof resourcesEN
    }
}
