import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardLater from '../myscreens/OnboardLater';


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('First component', () => {
  it('renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    jest.mock('react-native-responsive-screen', () => ({
      widthPercentageToDP: jest.fn(),
      heightPercentageToDP: jest.fn(),
    }));
    const tree = renderer.create(<OnboardLater />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});