function createStore() {
  const store = [2];
  return  function (dress) {
    store.push(dress);
    
    console.log(store);
      
    
  }
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);


console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
