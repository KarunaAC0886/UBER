import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardLogin from '../myscreens/OnboardLogin';

jest.mock('@expo/vector-icons', () => ({
    FontAwesome6: ' FontAwesome6',
    Ionicons:'Ionicons' 
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('onbordLogin component', () => {
  it('renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<OnboardLogin/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
