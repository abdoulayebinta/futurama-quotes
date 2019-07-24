import React from 'react';
import renderer from 'react-test-renderer';
import QuotesList from '../src/components/QuotesList';

const listofQuotes = [ 
    { 'character': 'Fry', 
    'quote': "I haven't had time off since I was 21 through 24.", 
    'image': 'Fry.png' 
    },
    { 'character': 'Bender', 
    'quote': "Bender's quotes.", 
    'image': 'Bender.png' 
    }
]
    

describe('<QuotesList />', () => {
  test('Should not break if a quote is passed', () => {
    const component = renderer.create(<QuotesList  quotes={listofQuotes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<QuotesList quotes={listofQuotes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
