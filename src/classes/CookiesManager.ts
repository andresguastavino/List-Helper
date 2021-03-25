export default class CookiesManager {

    static getLists(init : boolean) : any[] {
        let lists = [];
        let cookies = document.cookie;
        if(cookies !== '') {
            for(let cookie of cookies.split(';')) {
                let name = cookie.split('=')[0].trim();

                if(name !== 'currentThemeIndex' && name !== 'customTheme') {
                    let listInfo = cookie.split('=')[1].split(',');
                    let type = listInfo[0];
                    listInfo.shift();
                    let itemsArray = listInfo;

                    let items = [];
                    for(let item of itemsArray) {
                        let itemAux = {
                            "name": item.split(':')[0].trim(),
                            "value": ''
                        }

                        if(type.toLowerCase() === 'daily' && init) {
                            itemAux.value = 'Ausent';
                        } else {
                            itemAux.value = item.split(':')[1].trim();
                        }

                        items.push(itemAux);
                    }

                    let list ={
                        "name": name,
                        "type": type, 
                        "items": items
                    };

                    lists.push(list);

                    if(type.toLowerCase() === 'daily' && init) {
                        CookiesManager.saveList(list);
                    }
                }
            }
        }

        return lists.length > 0 ? lists : [];
    }

    static getCurrentThemeIndex() : number {
        let currentThemeIndex = 0;
        let cookies = document.cookie;
        if(cookies !== '') {
            for(let cookie of cookies.split(';')) {
                let name = cookie.split('=')[0].trim();

                if(name === 'currentThemeIndex') {
                    currentThemeIndex = parseInt(cookie.split('=')[1].split(',')[0]);
                } 
            }
        }

        return currentThemeIndex;
    }

    static getCustomTheme() : any {
        let customTheme = {};
        let cookies = document.cookie;
        if(cookies !== '') {
            for(let cookie of cookies.split(';')) {
                let name = cookie.split('=')[0].trim();

                if(name === 'customTheme') {
                    let items = cookie.split('=')[1].split(',');
                    customTheme = {
                        "mainColor": items[0],
                        "secondaryColor": items[1],
                        "borderColor": items[2],
                        "textColor": items[3]
                    };
                }
            }
        }

        return customTheme;
    }

    static saveCustomTheme(customTheme: any) : void {
        let cookie = 'customTheme=' +  customTheme.mainColor + ',' +  customTheme.secondaryColor + ',' + 
            customTheme.borderColor + ',' + customTheme.textColor;
        CookiesManager.saveCookie(cookie);
            
    }

    static saveCurrentThemeIndex(currentThemeIndex: number) : void {
        let cookie = 'currentThemeIndex=' + currentThemeIndex;
        CookiesManager.saveCookie(cookie);
    }

    static saveList(list : any) : void {
        let cookie = list.name + '=' + list.type + ',';

        for(let i = 0; i < list.items.length; i++) {
            let item = list.items[i];
            cookie += item.name + ':' + item.value;

            if(i !== list.items.length - 1) {
                cookie += ',';
            }
        }
        CookiesManager.saveCookie(cookie);
    }

    static saveCookie(cookie: string) : void {
        cookie += '; Path=/; Expires=Thu, 01 Jan ' + (new Date().getFullYear() + 1)  + ' 00:00:00 GMT;';
        document.cookie = cookie;
    }

    static deleteList(list: any) : void {
        let cookie = list.name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        document.cookie = cookie;
    }
 
}