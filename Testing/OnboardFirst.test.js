

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardFirst from '../myscreens/OnboardFirst';

jest.mock('@expo/vector-icons', () => ({
    AntDesign: 'AntDesign', 
}));


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

describe('First component', () => {
  it('renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<OnboardFirst/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

