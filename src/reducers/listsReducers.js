const initialState = [
  {
    id: 0,
    title: "Draft Events",
    posts: [
      {
        id: 0,
        text: "Happy Mother's Day Deals"
      },{
        id: 1,
        text: "Happy Father's Day Deals"
      },{
        id: 2,
        text: "Happy 4th of July Savings"
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