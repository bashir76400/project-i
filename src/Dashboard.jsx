import { useLocation } from "react-router";
import DashboardLinks from "./DashboardLinks";
import TextToText from "./Text-To-Text";

export default function Dashboard(){

    const location = useLocation().pathname;
    

    return <section className="flex">
        <DashboardLinks/>
        {location === '/dashboard' && <p>Dashbord</p>}
        {location === '/text-to-text' && <TextToText/>}
    </section>
}