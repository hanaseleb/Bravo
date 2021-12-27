/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/

import { Dispatchable } from '../helpers/dispatchable';
import { host, optionsController } from '../main';

export enum ThemeType {
    Auto = "Auto",
    Dark = "Dark",
    Light = "Light",
}
export class ThemeController extends Dispatchable {
    
    theme;
    deviceTheme;
    
    constructor() {
        super();
        
        this.theme = ThemeType.Auto;

        if (window.matchMedia) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

            this.deviceTheme = (mediaQuery.matches ? ThemeType.Dark : ThemeType.Light);

            mediaQuery.addEventListener("change", e => {
                this.deviceTheme = (e.matches ? ThemeType.Dark : ThemeType.Light);
                this.apply();
            });
        } else {
            this.deviceTheme = ThemeType.Light;
        }

        optionsController.on("change", (changedOptions: any) => {
            if ("theme" in changedOptions)
                this.apply(changedOptions.theme);
        });

        this.apply();
    }

    change(theme: ThemeType) {
        optionsController.update("theme", theme);
        this.apply(theme);
    }

    apply(theme?: ThemeType) {
        console.log("Applying theme", theme);
        if (!theme) 
            theme = optionsController.options.theme;
console.log("Ok", theme);
        if (theme == ThemeType.Auto)
            theme = this.deviceTheme;

        this.theme = theme;
        this.trigger("change", theme);
        host.changeTheme(theme);

        if (document.body.classList.contains("no-theme")) return;

        if (theme == ThemeType.Dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    get isDark() {
        return this.theme == ThemeType.Dark;
    }
    get isLight() {
        return this.theme == ThemeType.Light;
    }
}