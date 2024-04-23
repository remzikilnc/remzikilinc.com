import {Metadata} from "next";

export const MetaData: Metadata = {
    metadataBase: new URL("http://localhost:8080"),
    title: "Remzi Kılınç Portfolio",
    description: "Developer Portfolio By Remzi Kılınç",
    keywords: ["Developer", "Portfolio", "Developer Portfolio", "Remzi Kılınç Portfolio", "Remzi Kılınç"],
    openGraph: {
        title: "Remzi Kılınç",
        description: "Computer Engineer",
        images: "/OpenGraph.webp",
    },
};