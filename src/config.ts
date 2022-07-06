import {Link} from "./models/link";

export default Object.seal(new class Config {

    title: string = "Wesbury";
    fullTitle: string = "Admiralty of Wesbury";

    navigation: Link[] = [
        {
            label: "News",
            href: "/WesburyGov2021/news"
        },
        {
            label: "Laws",
            href: "/WesburyGov2021/laws"
        },
        {
            label: "Watchdog",
            href: "/WesburyGov2021/watchdog"
        },
        {
            label: "Discord",
            href: "https://discord.gg/8Uc3g2JsFr",
            target: "_blank"
        },
        {
            label: "About",
            href: "/WesburyGov2021/about"
        }
    ];

    roots: {[key: string]: string} = {
        news: "/news/",
        laws: "/laws/"
    };

});
