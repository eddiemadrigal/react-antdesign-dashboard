const initialState = [
  {
    id: 0,
    title: "Drafts",
    posts: [
      {
        id: 0,
        title: "Merry Christmas",
        text: "Savings for mom up 50% on all purchases."
      },{
        id: 1,
        title: "Happy New Year 2021",
        text: "Savings for dad up 50% on all purchases."
      },{
        id: 2,
        title: "Happy Valentines' Gifts",
        text: "Savings for the family up 50% on all purchases."
      }
    ]
  },
  {
    id: 1,
    title: "Queue",
    posts: [
      {
        id: 0,
        title: "Happy Mother's Day Deals",
        text: "Savings for mom up 50% on all purchases."
      },{
        id: 1,
        title: "Happy Father's Day Deals",
        text: "Savings for dad up 50% on all purchases."
      },{
        id: 2,
        title: "Happy 4th of July Savings",
        text: "Savings for the family up 50% on all purchases."
      }
    ]
  },
  {
    id: 2,
    title: "Sent",
    posts: [
      {
        id: 0,
        title: "Happy Easter",
        text: "Savings of up 50% on all purchases."
      },{
        id: 1,
        title: "Celebrate President's Day",
        text: "Savings up 50% on all purchases."
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;