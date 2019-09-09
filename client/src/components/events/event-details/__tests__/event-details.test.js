import React from 'react';
import ConnectedEventDetails, { EventDetails } from '../event-details.component';
import { shallow, mount } from 'enzyme';
import Root from '../../../../Root';
import renderer from 'react-test-renderer';

xdescribe('Event Details Component', () => {
  let wrapper = null;
  let mockProps = null;
  let mockOnClose = null;
  let mockEvent = null;
  
  beforeEach(() => {
    mockOnClose = jest.fn();
    mockEvent = {
      cancelled: false,
      courses: [],
      currency: "euro",
      description: "We're back with a newly-construct­ed floor. Drop on in for a dance in the green and glorious surroundings of Jockel Biergarten, very near the Landwehrkanal in Kreuzberg. There's beer, lemonade, and food there, not to mention plenty of sun- and all the fresh outdoor air you can breathe. (There is a bit of shade available as well.)↵↵There are both indoor and outdoor spaces to dance, so we can dance in all weather conditions.↵↵With DJ! Toss a bit of cash in the hat: your generous donations help keep the whole flying outdoor circus running.",
      end: "2019-09-01T18:00:00.000Z",
      going: [],
      host: ["A8WnU1fmQnWQ3bjvI6PYro32Tjh1"],
      id: "6rfrXIvwXLsEWdzvvSvw",
      interested: [],
      links: [],
      location: "Jockel Biergarten, Ratiborstraße 14C, 10999 Berlin, Germany (Karte)",
      mapLink: "https://maps.google.com/maps?hl=de&q=Jockel%20Biergarten%2C%20Ratiborstra%C3%9Fe%2014C%2C%2010999%20Berlin%2C%20Germany",
      otherFees: [],
      start: "2019-09-01T14:00:00.000Z",
      title: "Outdoors!",
      type: "social",
    };

    mockProps = {
      isOpen: true,
      onClose: mockOnClose,
      event: mockEvent
    };

    const initialState = {
      themeMode: { darkMode: false }
    }
    
    wrapper = mount(
      <Root initialState={initialState}>
        <ConnectedEventDetails {...mockProps} />
      </Root>
    );
  });

  it('should render correctly', () => {
    mockProps = {
      isOpen: true,
      onClose: mockOnClose,
      event: mockEvent
    };

    const tree = renderer.create(<EventDetails {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});