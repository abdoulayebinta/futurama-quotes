import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../src/components/SearchBar';

describe('<SearchBar />', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<SearchBar />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
