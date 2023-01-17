import AuthForm from "../../components/AuthForm";


export function MainContent() {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: "100%"
    }}><AuthForm /></div>
}