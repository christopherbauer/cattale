import { Container } from "@chakra-ui/react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Urls } from "./lib";
import { Dashboard } from "./pages/Dashboard";
import { AuthenticatedRoute } from "./routes";
const Layout = () => {
	return (
		<Container bg="blue.50" minH={"100vh"} minW={"100vw"}>
			<Outlet />
		</Container>
	);
};
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Urls.Home} element={<Layout />}>
					<Route index element={<Login />} />
					<Route path={Urls.Dashboard} element={<AuthenticatedRoute />}>
						<Route index element={<Dashboard />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
