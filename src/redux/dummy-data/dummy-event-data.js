import { firestore } from '../../firebase/firebase.utils';

const EVENTS_DATA = {
  title: 'Mock Events',
  routeName: 'events',
  events: {
    id: {
      id: '',
      title: 'Swingtanzen Macht Froh!',
      host: {},
      type: 'social',
      location: 'Sunny street. 42, 10101 Berlin',
      start: new Date('2019-09-10T20:00:00'), 
      end:  new Date('2019-10-10T02:00:00'),
      courses: [
        {
          courseTitle: 'Beg. Crash Course',
          location: null,
          start: new Date('2019-09-10T20:00:00'),
          end: new Date('2019-09-10T20:45:00'),
          fees: [
            {
              feeTitle: 'Reduced & Regular',
              fee: 6,
              slidingFee: 8,
            }
          ]
        }
      ],
      otherFees: [
        {
          feeTitle: 'Regular',
          fee: 8,
          slidingFee: 10,
        },
        {
          feeTitle: 'Beg. Crash Course + Social',
          fee: 14
        }
      ],
      currency: 'euro',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus aliquet, orci lacus torquent leo aptent lobortis cubilia blandit, tortor fringilla non nunc porta nec dis ac. Augue rutrum per egestas dictumst',
      links: 'https://rand.cat/',
      interested: {},
      going: {}
    }
  }
}

export const addMockEventsToDb = async (copies, hostObj) => {
  const dummyEventsRef = firestore.collection('mockEvents');
  let mockEvent = EVENTS_DATA.events.id;
  mockEvent.host = hostObj;

  for (let i = 0; i < copies; i++) {
    const newDocRef = dummyEventsRef.doc();
    mockEvent.id = newDocRef.id;

    console.log('newDocRef: ', newDocRef);
    try {
      await newDocRef.set(mockEvent);
    } catch (error) {
      console.log('Add Mock Events Error!: ', error);
    }
  }
} 