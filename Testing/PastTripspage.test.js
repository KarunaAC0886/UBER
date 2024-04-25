import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import PastTripspage from '../myscreens/PastTripspage';

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

describe('Past Trips', () => {
  it('Past Trips page renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<PastTripspage/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});