import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Dharmendra Kumar",
    age: 25,
    email: "dhiru657758@gmail.com",
    phone: 565899069,
    access: "admin",
    address: "123 Main St",
    city: "New Delhi",
    zipcode: 110001,
    joinDate: "2020-05-10",
    salary: 50000
  },
  {
    id: 2,
    name: "Rohit Sharma",
    age: 30,
    email: "rohit.sharma@example.com",
    phone: 7896543210,
    access: "user",
    address: "456 Market Rd",
    city: "Mumbai",
    zipcode: 400001,
    joinDate: "2018-07-15",
    salary: 40000
  },
  {
    id: 3,
    name: "Priya Singh",
    age: 27,
    email: "priya.singh@example.com",
    phone: 9876543211,
    access: "manager",
    address: "789 Industrial Ave",
    city: "Bangalore",
    zipcode: 560001,
    joinDate: "2019-03-22",
    salary: 60000
  },
  {
    id: 4,
    name: "Aman Verma",
    age: 22,
    email: "aman.verma@example.com",
    phone: 8123456789,
    access: "user",
    address: "123 Lake Rd",
    city: "Pune",
    zipcode: 411001,
    joinDate: "2021-01-10",
    salary: 35000
  },
  {
    id: 5,
    name: "Nisha Gupta",
    age: 29,
    email: "nisha.gupta@example.com",
    phone: 9254612345,
    access: "admin",
    address: "456 Hill St",
    city: "Kolkata",
    zipcode: 700001,
    joinDate: "2017-09-05",
    salary: 55000
  },
  {
    id: 6,
    name: "Suresh Mehta",
    age: 35,
    email: "suresh.mehta@example.com",
    phone: 8547621345,
    access: "manager",
    address: "789 Greenway Blvd",
    city: "Chennai",
    zipcode: 600001,
    joinDate: "2016-11-30",
    salary: 65000
  },
  {
    id: 7,
    name: "Kavita Kapoor",
    age: 28,
    email: "kavita.kapoor@example.com",
    phone: 9456123789,
    access: "user",
    address: "321 River St",
    city: "Hyderabad",
    zipcode: 500001,
    joinDate: "2020-02-17",
    salary: 42000
  },
  {
    id: 8,
    name: "Rahul Agarwal",
    age: 31,
    email: "rahul.agarwal@example.com",
    phone: 9871234567,
    access: "admin",
    address: "654 Oak Dr",
    city: "Ahmedabad",
    zipcode: 380001,
    joinDate: "2018-08-12",
    salary: 52000
  },
  {
    id: 9,
    name: "Pooja Desai",
    age: 24,
    email: "pooja.desai@example.com",
    phone: 9638527410,
    access: "manager",
    address: "987 Birch Ave",
    city: "Surat",
    zipcode: 395001,
    joinDate: "2021-06-08",
    salary: 47000
  },
  {
    id: 10,
    name: "Anil Bhatt",
    age: 33,
    email: "anil.bhatt@example.com",
    phone: 8529631470,
    access: "user",
    address: "741 Maple Ln",
    city: "Jaipur",
    zipcode: 302001,
    joinDate: "2019-10-20",
    salary: 38000
  },
  {
    id: 11,
    name: "Sunita Sharma",
    age: 26,
    email: "sunita.sharma@example.com",
    phone: 9745632108,
    access: "user",
    address: "852 Ash St",
    city: "Lucknow",
    zipcode: 226001,
    joinDate: "2020-12-05",
    salary: 36000
  },
  {
    id: 12,
    name: "Vikram Patil",
    age: 34,
    email: "vikram.patil@example.com",
    phone: 7845123690,
    access: "manager",
    address: "963 Cedar Blvd",
    city: "Kanpur",
    zipcode: 208001,
    joinDate: "2017-04-18",
    salary: 61000
  },
  {
    id: 13,
    name: "Sneha Jain",
    age: 23,
    email: "sneha.jain@example.com",
    phone: 7412589630,
    access: "user",
    address: "159 Pine St",
    city: "Indore",
    zipcode: 452001,
    joinDate: "2021-09-25",
    salary: 33000
  },
  {
    id: 14,
    name: "Manoj Tiwari",
    age: 40,
    email: "manoj.tiwari@example.com",
    phone: 8527419632,
    access: "admin",
    address: "963 Walnut Ave",
    city: "Patna",
    zipcode: 800001,
    joinDate: "2015-01-14",
    salary: 70000
  },
  {
    id: 15,
    name: "Rita Chauhan",
    age: 32,
    email: "rita.chauhan@example.com",
    phone: 7896541230,
    access: "manager",
    address: "852 Elm St",
    city: "Bhopal",
    zipcode: 462001,
    joinDate: "2018-11-05",
    salary: 59000
  }
];

export const mockGeoData = [
  { id: 'AFG', value: 95 }, // Afghanistan
  { id: 'AGO', value: 80 }, // Angola
  { id: 'USA', value: 65 }, // United States
  { id: 'IND', value: 40 }, // India
  { id: 'CHN', value: 75 }, // China
  { id: 'RUS', value: 50 }, // Russia
  { id: 'BRA', value: 85 }, // Brazil
  { id: 'CAN', value: 45 }, // Canada
  { id: 'AUS', value: 35 }, // Australia
 
];


export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101
      },
      {
        x: "helicopter",
        y: 75
      },
      {
        x: "boat",
        y: 36
      },
      {
        x: "train",
        y: 216
      },
      {
        x: "subway",
        y: 35
      },
      {
        x: "bus",
        y: 236
      },
      {
        x: "car",
        y: 88
      },
      {
        x: "moto",
        y: 232
      },
      {
        x: "bicycle",
        y: 281
      },
      {
        x: "horse",
        y: 1
      },
      {
        x: "skateboard",
        y: 35
      },
      {
        x: "others",
        y: 14
      }
    ]
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212
      },
      {
        x: "helicopter",
        y: 190
      },
      {
        x: "boat",
        y: 270
      },
      {
        x: "train",
        y: 9
      },
      {
        x: "subway",
        y: 75
      },
      {
        x: "bus",
        y: 175
      },
      {
        x: "car",
        y: 33
      },
      {
        x: "moto",
        y: 189
      },
      {
        x: "bicycle",
        y: 97
      },
      {
        x: "horse",
        y: 87
      },
      {
        x: "skateboard",
        y: 299
      },
      {
        x: "others",
        y: 251
      }
    ]
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191
      },
      {
        x: "helicopter",
        y: 136
      },
      {
        x: "boat",
        y: 91
      },
      {
        x: "train",
        y: 190
      },
      {
        x: "subway",
        y: 211
      },
      {
        x: "bus",
        y: 152
      },
      {
        x: "car",
        y: 189
      },
      {
        x: "moto",
        y: 152
      },
      {
        x: "bicycle",
        y: 8
      },
      {
        x: "horse",
        y: 197
      },
      {
        x: "skateboard",
        y: 107
      },
      {
        x: "others",
        y: 170
      }
    ]
  }
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)"
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)"
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)"
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)"
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)"
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)"
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)"
  }
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)"
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)"
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)"
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)"
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)"
  }
];

export const mockTransaction=
  [
  {
    "employeeId": "EMP001",
    "employeeName": "John Doe",
    "position": "Software Engineer",
    "salary": 75000,
    "paymentDate": "2024-09-30",
    "status": "Paid"
  },
  {
    "employeeId": "EMP002",
    "employeeName": "Jane Smith",
    "position": "Product Manager",
    "salary": 90000,
    "paymentDate": "2024-09-30",
    "status": "Paid"
  },
  {
    "employeeId": "EMP003",
    "employeeName": "Michael Johnson",
    "position": "UX Designer",
    "salary": 70000,
    "paymentDate": "2024-09-30",
    "status": "Paid"
  },
  {
    "employeeId": "EMP004",
    "employeeName": "Emily Davis",
    "position": "Data Scientist",
    "salary": 85000,
    "paymentDate": "2024-09-30",
    "status": "Pending"
  },
  {
    "employeeId": "EMP005",
    "employeeName": "Chris Lee",
    "position": "DevOps Engineer",
    "salary": 78000,
    "paymentDate": "2024-09-30",
    "status": "Paid"
  }
]

