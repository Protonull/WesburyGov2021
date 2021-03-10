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
            label: "Admiralty",
            href: "/admiralty"
        },
        {
            label: "Watchdog",
            href: "/watchdog"
        },
        {
            label: "Discord",
            href: "https://discord.gg/gwrEc2PhWT",
            target: "_blank"
        },
        {
            label: "About",
            href: "/about"
        }
    ];

    roots: {[key: string]: string} = {
        news: "/news/"
    };

});
