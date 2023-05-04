export default (current)  => {
    const nextPlayerMap = {
      "X": "O",
      "O": "X"
    }
  
    return nextPlayerMap[current];
  }