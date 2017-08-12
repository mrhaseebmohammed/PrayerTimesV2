import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {


    items = new Array<Item>();

    getItems(): Item[] {

        var tempItems = new Array<Item>();
        var http = require("http");
        var url = "https://ci41x5l8ed.execute-api.us-east-1.amazonaws.com/prod/GetPrayerTimes";
        http.getJSON(url).then(function (r) {
            var ndx = 1;
            r.Items.forEach(element => {
                var tempItem = new Item();
                tempItem.id = ndx;
                tempItem.name = element.Name;
                tempItem.fajr = element.Fajr;
                tempItem.zuhr = element.Zuhr;
                tempItem.asr = element.Asr;
                tempItem.isha = element.Isha;
                tempItem.jummah1 = element.Jummah1;
                tempItems.push(tempItem);
                ndx++;
            });
        }, function (e) {
            //// Argument (e) is Error!
            //console.log(e);
        });

        console.log(tempItems);
        this.items = tempItems;
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }


}
