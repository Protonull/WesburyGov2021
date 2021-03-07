export type Link = {
    label: string,
    href: string,
    alt?: string,
    target?: string
};

export function parseLink(raw: object): Link {
    return <Link>{
        ...raw,
        // @ts-ignore
        target: raw?.target ?? "_self"
    };
}
