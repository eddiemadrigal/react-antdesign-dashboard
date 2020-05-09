const initialState = [
  {
    id: 0,
    title: "Draft Events",
    posts: [
      {
        id: 0,
        text: "Happy Mother's Day"
      },{
        id: 1,
        text: "Happy Father's Day"
      },{
        id: 2,
        text: "Happy 4th of Day"
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