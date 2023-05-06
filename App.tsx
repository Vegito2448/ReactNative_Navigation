import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./src/navigator/StackNavigator";
import { ReactNode } from "react";
import AuthProvider from "./src/context/AuthContext";
import SideMenu from "./src/navigator/SideMenu";
const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<SideMenu />
			</AppState>
			{/* <StackNavigator /> */}
			{/* <BasicSideMenu /> */}

			{/* <Tabs /> */}
		</NavigationContainer>
	);
};

const AppState = ({ children }: { children: ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>;
};

export default App;
