import React from 'react';
import  renderer  from 'react-test-renderer';
import Tripspage from '../myscreens/Tripspage'

jest.mock('@expo/vector-icons', () => ({
  FontAwesome5: 'FontAwesome5',
}));

jest.mock('@react-navigation/material-top-tabs', () => ({
  createMaterialTopTabNavigator: jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Tripspage ', () => {
  it('renders correctly', () => {
    const { toJSON } = renderer.create(<Tripspage />);
   
    expect(toJSON()).toMatchSnapshot();
  });

});
