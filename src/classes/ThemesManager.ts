import CookiesManager from './CookiesManager';

export default class ThemesManager {

    themes: Object[] = [];
    currentThemeIndex: number = 0;

    constructor() {
        this.currentThemeIndex = CookiesManager.getCurrentThemeIndex();
        this.buildThemes();
    }

    buildThemes() : void {
        let lightTheme = {
            mainColor: '#fff',
            secondaryColor: '#fff',
            borderColor: '#000',
            textColor: '#000'
        };

        let darkTheme = { 
            mainColor: '#000',
            secondaryColor: '#201e25',
            borderColor: '#383434',
            textColor: '#fff'
        };

        let customTheme = CookiesManager.getCustomTheme();

        this.themes = [
            lightTheme,
            darkTheme,
            Object.keys(customTheme).length > 0 ? customTheme : darkTheme
        ];
    }

    getCurrentTheme() : Object {
        return this.themes[this.currentThemeIndex];
    }

    getCurrentThemeIndex() : number {
        return this.currentThemeIndex;
    }

    setCustomTheme(customTheme: Object) : void {
        this.themes[2] = customTheme;
        CookiesManager.saveCustomTheme(customTheme);
    }

    setCurrentTheme(themeIndex: number) : void {
        this.currentThemeIndex = themeIndex;
        CookiesManager.saveCurrentThemeIndex(themeIndex);
    }

}   