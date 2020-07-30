const PICK_UP = 'Pick-Up';
const DROP_OFF = 'Drop-Off';
const OTHER = 'Other';

const tasks_list = {
  'Aaron Smith': {
    '1': {
      '1': {
        tasks: [
          {
            id: '1001',
            type: DROP_OFF,
            start_time: 9,
            end_time: 12,
            location: 'Costco',
          },
          {
            id: '1002',
            type: OTHER,
            start_time: 12,
            end_time: 14,
          },
          {
            id: '1003',
            type: DROP_OFF,
            start_time: 14,
            end_time: 16,
            location: 'Superstore',
          },
        ],
      },
      '2': {
        tasks: [
          {
            id: '2004',
            type: PICK_UP,
            start_time: 3,
            end_time: 6,
            location: `McDonald's`,
          },
          {
            id: '1004',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: `McDonald's`,
          },
          {
            id: '1005',
            type: DROP_OFF,
            start_time: 15,
            end_time: 17,
            location: 'Sobeys',
          },
          {
            id: '1006',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
      '3': {
        tasks: [
          {
            id: '2007',
            type: DROP_OFF,
            start_time: 0,
            end_time: 5,
            location: 'Staples',
          },
          {
            id: '1007',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'Staples',
          },
        ],
      },
      '5': {
        tasks: [
          {
            id: '3508',
            type: PICK_UP,
            start_time: 4,
            end_time: 6,
            location: 'Rona',
          },
          {
            id: '1008',
            type: OTHER,
            start_time: 6,
            end_time: 7,
            location: `Tim Horton's`,
          },
          {
            id: '3108',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'Staples',
          },
        ],
      },
      '7': {
        tasks: [
          {
            id: '1009',
            type: PICK_UP,
            start_time: 8,
            end_time: 10,
            location: `McDonald's`,
          },
          {
            id: '1010',
            type: DROP_OFF,
            start_time: 15,
            end_time: 17,
            location: 'Sobeys',
          },
          {
            id: '1011',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
    },

    '2': {
      '1': {
        tasks: [
          {
            id: '1012',
            type: DROP_OFF,
            start_time: 1,
            end_time: 3,
            location: 'Best Buy',
          },
          {
            id: '1013',
            type: OTHER,
            start_time: 12,
            end_time: 14,
          },
          {
            id: '1014',
            type: PICK_UP,
            start_time: 14,
            end_time: 16,
            location: 'Rona',
          },
        ],
      },
      '5': {
        tasks: [
          {
            id: '1016',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: `McDonald's`,
          },
          {
            id: '1017',
            type: OTHER,
            start_time: 15,
            end_time: 17,
            location: 'Tim Hortons',
          },
          {
            id: '1018',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
      '6': {
        tasks: [
          {
            id: '1019',
            type: PICK_UP,
            start_time: 6,
            end_time: 8,
            location: 'Staples',
          },
        ],
      },
      '7': {
        tasks: [
          {
            id: '1020',
            type: PICK_UP,
            start_time: 8,
            end_time: 10,
            location: `McDonald's`,
          },
          {
            id: '1021',
            type: DROP_OFF,
            start_time: 10,
            end_time: 12,
            location: 'Sobeys',
          },
          {
            id: '1022',
            type: OTHER,
            start_time: 12,
            end_time: 13,
            location: "Wendy's",
          },
          {
            id: '1023',
            type: DROP_OFF,
            start_time: 13,
            end_time: 14,
            location: 'Home Depot',
          },
          {
            id: '1024',
            type: PICK_UP,
            start_time: 16,
            end_time: 18,
            location: 'Dollarama',
          },
        ],
      },
    },

    '7': {
      '3': {
        tasks: [
          {
            id: '123457',
            type: PICK_UP,
            start_time: 15,
            end_time: 19,
            location: 'Dollarama',
          },
        ],
      },
    },
    '11': {
      '7': {
        tasks: [
          {
            id: '123461',
            type: DROP_OFF,
            start_time: 11,
            end_time: 12,
            location: 'Home Depot',
          },
        ],
      },
    },
    '14': {
      '5': {
        tasks: [
          {
            id: '123470',
            type: OTHER,
            start_time: 13,
            end_time: 17,
            location: 'Sobeys',
          },
        ],
      },
    },
    '34': {
      '5': {
        tasks: [
          {
            id: '123489',
            type: PICK_UP,
            start_time: 15,
            end_time: 19,
            location: 'Staples',
          },
        ],
      },
    },
    '35': {
      '2': {
        tasks: [
          {
            id: '123479',
            type: PICK_UP,
            start_time: 13,
            end_time: 16,
            location: 'Atlantic Superstore',
          },
        ],
      },
    },
    '37': {
      '4': {
        tasks: [
          {
            id: '123468',
            type: DROP_OFF,
            start_time: 10,
            end_time: 11,
            location: 'Best Buy',
          },
        ],
      },
    },
    '40': {
      '3': {
        tasks: [
          {
            id: '123474',
            type: DROP_OFF,
            start_time: 17,
            end_time: 20,
            location: 'Walmart',
          },
        ],
      },
    },
    '43': {
      '4': {
        tasks: [
          {
            id: '123485',
            type: OTHER,
            start_time: 16,
            end_time: 18,
            location: 'PetSmart',
          },
        ],
      },
    },
    '44': {
      '4': {
        tasks: [
          {
            id: '123459',
            type: OTHER,
            start_time: 9,
            end_time: 13,
            location: 'Home Depot',
          },
        ],
      },
    },
    '49': {
      '2': {
        tasks: [
          {
            id: '123462',
            type: PICK_UP,
            start_time: 9,
            end_time: 12,
            location: 'Best Buy',
          },
          {
            id: '123472',
            type: PICK_UP,
            start_time: 17,
            end_time: 20,
            location: 'Costco',
          },
        ],
      },
    },
    '52': {
      '5': {
        tasks: [
          {
            id: '123467',
            type: DROP_OFF,
            start_time: 13,
            end_time: 14,
            location: 'Home Depot',
          },
        ],
      },
    },
  },
  'Fierce Bob': {
    '1': {
      '2': {
        tasks: [
          {
            id: '234559',
            type: PICK_UP,
            start_time: 6,
            end_time: 8,
            location: 'Best Buy',
          },
        ],
      },
      '3': {
        tasks: [
          {
            id: '240559',
            type: PICK_UP,
            start_time: 0,
            end_time: 24,
            location: 'Best Buy',
          },
        ],
      },
      '6': {
        tasks: [
          {
            id: '234560',
            type: DROP_OFF,
            start_time: 0,
            end_time: 2,
            location: 'Best Buy',
          },
        ],
      },
    },
    '4': {
      '6': {
        tasks: [
          {
            id: '123480',
            type: DROP_OFF,
            start_time: 17,
            end_time: 21,
            location: 'Staples',
          },
        ],
      },
    },
    '7': {
      '3': {
        tasks: [
          {
            id: '123487',
            type: DROP_OFF,
            start_time: 12,
            end_time: 14,
            location: 'Sobeys',
          },
        ],
      },
    },
    '10': {
      '6': {
        tasks: [
          {
            id: '123477',
            type: OTHER,
            start_time: 8,
            end_time: 10,
            location: 'Sobeys',
          },
        ],
      },
    },
    '19': {
      '2': {
        tasks: [
          {
            id: '123490',
            type: DROP_OFF,
            start_time: 15,
            end_time: 18,
            location: 'Canadian Tire',
          },
        ],
      },
    },
    '22': {
      '1': {
        tasks: [
          {
            id: '123484',
            type: DROP_OFF,
            start_time: 17,
            end_time: 21,
            location: 'Atlantic Superstore',
          },
        ],
      },
    },
    '23': {
      '1': {
        tasks: [
          {
            id: '123476',
            type: OTHER,
            start_time: 8,
            end_time: 11,
            location: 'Best Buy',
          },
        ],
      },
    },
    '30': {
      '4': {
        tasks: [
          {
            id: '123465',
            type: PICK_UP,
            start_time: 8,
            end_time: 12,
            location: 'Walmart',
          },
        ],
      },
    },
    '31': {
      '6': {
        tasks: [
          {
            id: '123475',
            type: PICK_UP,
            start_time: 17,
            end_time: 18,
            location: 'Best Buy',
          },
        ],
      },
    },
    '42': {
      '2': {
        tasks: [
          {
            id: '123486',
            type: DROP_OFF,
            start_time: 10,
            end_time: 11,
            location: 'Rona',
          },
        ],
      },
      '4': {
        tasks: [
          {
            id: '123481',
            type: PICK_UP,
            start_time: 13,
            end_time: 16,
            location: 'Canadian Tire',
          },
        ],
      },
    },
  },
  'John Doe': {
    '1': {
      '4': {
        tasks: [
          {
            id: '873581',
            type: DROP_OFF,
            start_time: 6,
            end_time: 8,
            location: 'Shoppers',
          },
          {
            id: '872492',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: `Superstore`,
          },
        ],
      },
      '7': {
        tasks: [
          {
            id: '873491',
            type: OTHER,
            start_time: 3,
            end_time: 4,
            location: `McDonald's`,
          },
          {
            id: '873492',
            type: DROP_OFF,
            start_time: 4,
            end_time: 7,
            location: `Costco`,
          },
        ],
      },
    },
    '2': {
      '7': {
        tasks: [
          {
            id: '123491',
            type: OTHER,
            start_time: 14,
            end_time: 16,
            location: 'Staples',
          },
        ],
      },
    },
    '11': {
      '5': {
        tasks: [
          {
            id: '123482',
            type: DROP_OFF,
            start_time: 12,
            end_time: 13,
            location: 'Canadian Tire',
          },
        ],
      },
      '6': {
        tasks: [
          {
            id: '123460',
            type: OTHER,
            start_time: 11,
            end_time: 15,
            location: 'Shoppers Drug Mart',
          },
        ],
      },
    },
    '14': {
      '2': {
        tasks: [
          {
            id: '123464',
            type: OTHER,
            start_time: 17,
            end_time: 18,
            location: 'Staples',
          },
        ],
      },
    },
    '17': {
      '1': {
        tasks: [
          {
            id: '123471',
            type: OTHER,
            start_time: 12,
            end_time: 14,
            location: 'Best Buy',
          },
        ],
      },
    },
    '21': {
      '2': {
        tasks: [
          {
            id: '123473',
            type: OTHER,
            start_time: 12,
            end_time: 15,
            location: 'Dollarama',
          },
        ],
      },
    },
    '22': {
      '4': {
        tasks: [
          {
            id: '123456',
            type: OTHER,
            start_time: 11,
            end_time: 13,
            location: 'Walmart',
          },
        ],
      },
    },
    '24': {
      '6': {
        tasks: [
          {
            id: '123463',
            type: PICK_UP,
            start_time: 10,
            end_time: 14,
            location: 'Best Buy',
          },
        ],
      },
    },
    '29': {
      '4': {
        tasks: [
          {
            id: '123488',
            type: PICK_UP,
            start_time: 17,
            end_time: 18,
            location: 'Staples',
          },
        ],
      },
    },
    '33': {
      '7': {
        tasks: [
          {
            id: '123458',
            type: DROP_OFF,
            start_time: 15,
            end_time: 16,
            location: 'Best Buy',
          },
        ],
      },
    },
    '39': {
      '1': {
        tasks: [
          {
            id: '123493',
            type: PICK_UP,
            start_time: 16,
            end_time: 17,
            location: 'Shoppers Drug Mart',
          },
        ],
      },
    },
    '44': {
      '1': {
        tasks: [
          {
            id: '123478',
            type: PICK_UP,
            start_time: 10,
            end_time: 13,
            location: 'PetSmart',
          },
          {
            id: '123483',
            type: PICK_UP,
            start_time: 13,
            end_time: 17,
            location: 'Dollarama',
          },
        ],
      },
    },
    '45': {
      '1': {
        tasks: [
          {
            id: '123469',
            type: DROP_OFF,
            start_time: 9,
            end_time: 10,
            location: 'Costco',
          },
        ],
      },
    },
    '48': {
      '2': {
        tasks: [
          {
            id: '123466',
            type: DROP_OFF,
            start_time: 17,
            end_time: 19,
            location: 'Rona',
          },
        ],
      },
    },
    '52': {
      '2': {
        tasks: [
          {
            id: '123492',
            type: DROP_OFF,
            start_time: 13,
            end_time: 14,
            location: 'Rona',
          },
        ],
      },
    },
  },
};

module.exports = {
  tasks_list,
};
