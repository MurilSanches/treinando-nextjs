const Layout = ({
    children, 
    projects,
    team,
}: {
    children: React.ReactNode;
    projects: React.ReactNode;
    team: React.ReactNode;
}) => (
    <>
        {children}
        {projects}
        {team}
    </>
)

/* 
Exemplo:
const isLoggedIn = getUser()
const Component = isLoggedIn ? dashboard : login
*/


export default Layout