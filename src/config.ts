import {Link} from "./models/link";

export default Object.seal(new class Config {

    title: string = "Wesbury";
    fullTitle: string = "Admiralty of Wesbury";

    navigation: Link[] = [
        {
            label: "News",
            href: "/Wesbury/news"
        },
        {
            label: "Laws",
            href: "/Wesbury/laws"
        },
        {
            label: "Watchdog",
            href: "/Wesbury/watchdog"
        },
        {
            label: "Discord",
            href: "https://discord.gg/8Uc3g2JsFr",
            target: "_blank"
        },
        {
            label: "About",
            href: "/Wesbury/about"
        }
    ];

    roots: {[key: string]: string} = {
        news: "/news/",
        laws: "/laws/"
    };

});
