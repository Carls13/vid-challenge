import { MyHead as Head } from "../components/Head/Head";
import { DashboardView } from "../views/Dashboard/Dashboard";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <DashboardView />
        </>
    );
};