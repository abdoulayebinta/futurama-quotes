import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../src/components/Quote';

const testQuote = {
    'character': 'Fry', 
    'quote': "I haven't had time off since I was 21 through 24.", 
    'image': 'Fry.png'
}

describe('<Quote />', () => {
  test('Should break if no quote passed', () => {
    const component = renderer.create(<Quote quote={testQuote} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly rendered quote', () => {
    const component = renderer.create(<Quote quote={testQuote} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render selected quote', () => {
    const component = renderer.create(<Quote quote={testQuote} onQuoteSelect={testQuote} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
