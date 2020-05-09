const initialState = [
  {
    id: 0,
    title: "Drafts",
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
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;