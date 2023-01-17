import { DashboardLayout } from "./module/DashboardLayout/DashboardLayout";
import { MainContent } from "./module/MainContent/MainContent";

export function App() {
    return <DashboardLayout>
        <MainContent />
    </DashboardLayout>
}