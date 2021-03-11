import {Link} from "./models/link";

export default Object.seal(new class Config {

    title: string = "Wesbury";
    fullTitle: string = "Admiralty of Wesbury";

    navigation: Link[] = [
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Laws",
            href: "/laws"
        },
        {
            label: "Watchdog",
            href: "/watchdog"
        },
        {
            label: "Discord",
            href: "https://discord.gg/8Uc3g2JsFr",
            target: "_blank"
        },
        {
            label: "About",
            href: "/about"
        }
    ];

    roots: {[key: string]: string} = {
        news: "/news/",
        laws: "/laws/"
    };

});
