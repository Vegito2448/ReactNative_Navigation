import React, { useEffect } from "react";
import { Text, View } from "react-native";

const TabThreeScreen = () => {
	useEffect(() => {
		console.log("TabThreeScreen");
	}, []);
	return (
		<View>
			<Text>TabThreeScreen</Text>
		</View>
	);
};

export default TabThreeScreen;
