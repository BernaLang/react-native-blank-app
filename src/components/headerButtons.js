import * as React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const FeatherHeaderButton = props => (
	<HeaderButton
		{...props}
		IconComponent={FeatherIcons}
		iconSize={23}
		color="black"
	/>
);

const FontAwesome5HeaderButton = props => (
	<HeaderButton
		{...props}
		IconComponent={FontAwesome5}
		iconSize={23}
		color="black"
	/>
);

export const FeatherHeaderButtons = props => {
	return (
		<HeaderButtons
			HeaderButtonComponent={FeatherHeaderButton}
			OverflowIcon={
				<FeatherIcons name="more-vertical" size={23} color="black" />
			}
			{...props}
		/>
	);
};

export const FontAwesome5HeaderButtons = props => {
	return (
		<HeaderButtons
			HeaderButtonComponent={FontAwesome5HeaderButton}
			OverflowIcon={<FontAwesome5 name="ellipsis-v" size={23} color="black" />}
			{...props}
		/>
	);
};

export const Item = HeaderButtons.Item;
