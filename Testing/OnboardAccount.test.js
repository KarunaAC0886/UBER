import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardAccount from '../myscreens/OnboardAccount';

jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome', 
}));


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

describe('Account component', () => {
  it('renders correctly', () => {

    useNavigation.mockReturnValue({ navigate: jest.fn() });
    const tree = renderer.create(<OnboardAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
