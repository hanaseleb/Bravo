/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Utils } from '../helpers/utils';
import { notificationCenter } from '../main';
import { AppError } from '../model/exceptions';
import { Notify } from './notifications';

export class Debug { 
    
    enabled: boolean;

    constructor(enabled: boolean) {
        this.enabled = enabled;

        if (!enabled) {
            // Disable logs
            console.group = 
            console.groupCollapsed = 
            console.groupEnd =
            console.log = 
            console.warn = 
            console.error = 
            function() {};
        } 

        this.sendTestNotifications();
    }

    sendTestNotifications() {
        window.setTimeout(()=> {
            notificationCenter.add(new Notify("This is a test notification"));
        }, 6000);
    }

    catchApiCall(action: string, data = {}): Promise<any> {
        if (!this.enabled) return null;

        let genericError = AppError.InitFromResponseError(Utils.ResponseStatusCode.InternalError);

        switch (action) {
            case "#api/FormatDax":
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(genericError);
                    }, 1000);
                });

            default:
                return null;
        }
    }
}