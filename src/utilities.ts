import {arrayHasElements, exists, ordinal, parseDate} from "js-utilities";
import _hash from "object-hash";

export type Pocket = {
    [key in string | number]: any;
};

/**
 * Hashes a series of given things together.
 */
export default function hash(...objects: any[]): number {
    if (!arrayHasElements(objects)) {
        return 0;
    }
    return objects
        .map(object => _hash(object))
        .reduce((value, total) => value + total);
}

/**
 * Checks whether a given array has a given element.
 */
export function arrayHasElement(array: any[], element: any): boolean {
    return !arrayHasElements(array) || array.indexOf(element) >= 0;
}

/**
 * Filters a given object to return a new object only with the key-value pairs allowed by the given predicate.
 */
export function filterObject(object: object, predicate: (key, value) => boolean): object {
    if (!exists(object) || !exists(predicate)) {
        return Object.assign({}, object ?? {});
    }
    const filtered = {};
    for (const [key, value] of Object.entries(object)) {
        if (predicate(key, value)) {
            filtered[key] = value;
        }
    }
    return filtered;
}

/**
 * Checks whether a value exists in the given object that matches the criteria set by the given predicate.
 */
export function objectHasValue(object: object, predicate: (value) => boolean): boolean {
    return Object.values(object).findIndex(predicate) >= 0;
}

export function stringEqualsNotNull(former: string, latter: string): boolean {
    if (!exists(former) || !exists(latter)) {
        return false;
    }
    return former === latter;
}

export function allEmpty(...arrays: Array<Array<any>>): boolean {
    if (!exists(arrays)) {
        return true;
    }
    for (let array of arrays) {
        if (exists(array) && array.length > 0) {
            return false;
        }
    }
    return true;
}

export function formattedDate(rawDate: string, fullMonth: boolean = true): string {
    const date = parseDate(rawDate);
    let month = null;
    switch (date.getMonth()) {
        default:
        case 0: month = fullMonth ? "January" : "Jan"; break;
        case 1: month = fullMonth ? "February" : "Feb"; break;
        case 2: month = fullMonth ? "March" : "Mar"; break;
        case 3: month = fullMonth ? "April" : "Apr"; break;
        case 4: month = fullMonth ? "May" : "May"; break;
        case 5: month = fullMonth ? "June" : "Jun"; break;
        case 6: month = fullMonth ? "July" : "Jul"; break;
        case 7: month = fullMonth ? "August" : "Aug"; break;
        case 8: month = fullMonth ? "September" : "Sep"; break;
        case 9: month = fullMonth ? "October" : "Oct"; break;
        case 10: month = fullMonth ? "November" : "Nov"; break;
        case 11: month = fullMonth ? "December" : "Dec"; break;
    }
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day}${ordinal(day)}, ${year}`;
}

export function canvasTextWrap(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let width = context.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        }
        else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}
