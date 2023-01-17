import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer"

export function DashboardLayout({ children }) {
    return <div>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </div>
}