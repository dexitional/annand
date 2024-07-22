import Footer from "@/components/Footer";
import GlobalInsightWidget from "@/components/GlobalInsightWidget";
import Header from "@/components/Header"
import NewsLetterWidget from "@/components/NewsLetterWidget";
import NewsWidget from "@/components/NewsWidget";
import SpotlightMain from "@/components/SpotlightMain";
import TakeActionWidget from "@/components/TakeActionWidget";

export default function Home() {
  return (
    <main className="p-0 w-full flex flex-col items-start justify-start bg-red-50">
       {/* Spotlight widget */}
        <SpotlightMain />
       {/* General Insight widget */}
       <GlobalInsightWidget />
       {/* Newsroom widget */}
       <NewsWidget />
       {/* TakeAction widget */}
       {/* <TakeActionWidget /> */}
       {/* NewsLetter */}
       <NewsLetterWidget />
    </main>
  );
}
