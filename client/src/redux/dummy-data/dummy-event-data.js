export default {
  events: {
    id: {
      id: '',
      cancelled: false,
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
      mapLink: 'https://www.google.com/maps',
      links: 'https://rand.cat/',
      interested: {
        count: 0,
        users: {}
      },
      going: {
        count: 0,
        users: {}
      }
    }

  }
}

const eventUpdates = {
  eventUpdates: {
    id: {
      eventId: '123123123',
      messageType: 'cancelled',
      createdAt: new Date()
  
    }
  }
}

const users = {
  id: {
    id: '123123',
    email: 'user@test.com',
    username: 'user_test1',
    createdAt: new Date(),
    updatesRead: new Date(),
    interested: {
      count: 0,
      users: {}
    },
    going: {
      count: 0,
      users: {}
    },
    ownEvents: {
      count: 0,
      users: {}
    }
  }
}