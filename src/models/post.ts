import {parseDate} from "js-utilities";

export type RawPost = {
    title?: string,
    date?: string | number | Date
};

export type Post = {
    title: string,
    date: Date
} & {[key: string]: any};

export function parsePost(raw: RawPost): Post {
    return {
        title: raw.title ?? "Title",
        date: parseDate(raw.date) ?? new Date()
    };
}
