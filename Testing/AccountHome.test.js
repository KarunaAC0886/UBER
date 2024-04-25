import 'react-native';
import React from 'react';
import AccountHome from '../myscreens/AccountHome'
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';


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

describe('AccountHome', () => {
  it('AccountHome page renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<AccountHome/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});