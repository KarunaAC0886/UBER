import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import MessagesPage from '../myscreens/MessagesPage';

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
describe('MessagesPage', () => {
  it('Messages Page renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });
    const tree = renderer.create(<MessagesPage/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});