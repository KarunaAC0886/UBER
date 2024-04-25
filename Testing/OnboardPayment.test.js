import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardPayment from '../myscreens/OnboardPayment';

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

describe('Login component', () => {
  it('renders correctly', () => {

    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<OnboardPayment
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
