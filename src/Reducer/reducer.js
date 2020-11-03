//on peut avoir soit un seul reducer ,soit plusieurs reducer
// on va mettre toute les states que se soit tableau,nbe...(name ,counter,tableau d'objet mp) pour etre accessible à tout le monde
//const initialState={counter=0,name='steeve',mp:[{}]},
//l'action c'est un objet.on a plusieurs actions à faire(selon increment,decrement...) par switch
//counter mahtout fi state
const initialState = { counter: 0 };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + 1 };
    case "Decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
