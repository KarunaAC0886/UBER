import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import BackNavigator from '../myscreens/BackNavigator';
jest.mock('@expo/vector-icons', () => ({
    FontAwesome5: 'FontAwesome5', 
}));


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));
describe('BackNavigator', () => {
  it('BackNavigator page renders correctly', () => {
    
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<BackNavigator/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});