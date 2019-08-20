const EVENT_DATA = {
  id: 1,
  title: 'Events',
  routeName: 'events',
  events: [
    {
      title: 'Swingtanzen Macht Froh!',
      type: 'social',
      location: 'Sunny street. 42, 10101 Berlin',
      isMainLocation: true,
      start: '20:00, 10.12.2019',
      end: '02:00, 11.12.2019',
      courses: [
        {
          courseTitle: 'Beg. Crash Course',
          location: null,
          start: '20:00, 10.12.2019',
          end: '02:00, 11.12.2019',
          fee: 8
        }
      ],
      fees: [
        {
          feeTitle: 'Regular',
          fee: 10,
        },
        {
          feeTitle: 'Beg. Crash Course + Social',
          fee: 15
        }
      ],
      currency: 'euro',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tellus aliquet, orci lacus torquent leo aptent lobortis cubilia blandit, tortor fringilla non nunc porta nec dis ac. Augue rutrum per egestas dictumst',
      links: 'https://rand.cat/'
    }
  ]
}