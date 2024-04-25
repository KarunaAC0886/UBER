import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UpcomingTrips from '../myscreens/UpcomingTrips';

jest.mock('@react-navigation/material-top-tabs', () => {
  const Tab = jest.fn();
  const createMaterialTopTabNavigator = jest.fn(() => ({ Tab }));
  return { createMaterialTopTabNavigator };
});

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

describe('Past Trips', () => {
  it('Past Trips page renders correctly', () => {
    const tree = renderer.create(<UpcomingTrips />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
