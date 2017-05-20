export default function(state = [], action) {
  switch(action.type) {
  case "dog":
    return [
      { title: action.payload, pages: 101 },
      { title: 'Harry Potter', pages: 39 }
    ];
  }

  return state;
}