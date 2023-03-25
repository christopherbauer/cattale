import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Outlet, Navigate, Route, Routes } from "react-router-dom";
import { CatList } from "./components/CatList";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Urls } from "./lib";
const Layout = () => {
	return (
		<Container bg="blue.50" minH={"100vh"} minW={"100vw"}>
			<Outlet />
		</Container>
	);
};
const AuthenticatedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth0();
	if (!isLoading && !isAuthenticated) {
		return <Navigate to={Urls.Home} />;
	}
	return <Outlet />;
};
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Urls.Home} element={<Layout />}>
					<Route index element={<Login />} />
					<Route path={Urls.Dashboard} element={<AuthenticatedRoute />}>
						<Route
							index
							element={
								<Container>
									<Profile />
									<CatList />
								</Container>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
