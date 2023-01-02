import React from "react";
import Section1 from "./sections/section-1";
import Section2 from "./sections/section-2";
import Section3 from "./sections/section-3";
import Section4 from "./sections/section-4";
import Section5 from "./sections/section-5";
import Section6 from "./sections/section-6";
import Section7 from "./sections/section-7";

class Main extends React.Component{
    render() {
        return(
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
            </main>
        );
    }
}
export default Main;
