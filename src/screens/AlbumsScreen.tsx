import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

const AlbumsScreen = () => {
	const {
		logOut,
		authState: { isLoggedIn },
	} = useContext(AuthContext);
	return (
		<View>
			<Text>AlbumsScreen</Text>
			{isLoggedIn && <Button title="Log Out" onPress={logOut} />}
		</View>
	);
};

export default AlbumsScreen;
