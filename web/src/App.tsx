import { Container } from "@chakra-ui/react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CatList } from "./components/CatList";
import { Login } from "./components/Login";
import { LogoutButton } from "./components/Logout";
import { Profile } from "./components/Profile";
const Layout = () => {
	return (
		<Container bg="blue.50" minH={"100vh"} minW={"100vw"}>
			<Outlet />
		</Container>
	);
};
const AuthenticatedRoute = () => {
	return <Outlet />;
};
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path="/dashboard" element={<AuthenticatedRoute />}>
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
