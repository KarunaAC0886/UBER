import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import PaymentPage from '../myscreens/PaymentPage';

jest.mock('@expo/vector-icons', () => ({
    FontAwesome5: 'FontAwesome5',
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('PaymentPage', () => {
  it('PaymentPage page renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<PaymentPage/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});