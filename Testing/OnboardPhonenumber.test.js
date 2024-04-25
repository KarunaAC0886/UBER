import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import OnboardSocial from '../myscreens/OnboardSocial';



jest.mock('@expo/vector-icons', () => ({
    AntDesign: ' AntDesign',
}));

jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Social component', () => {
  it('renders correctly', () => {
   
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<OnboardSocial/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
