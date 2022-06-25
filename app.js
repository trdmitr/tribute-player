import {songs} from './songs'


const listItems = songs.map((el) => (
    <div key={el.id}>
    {`${el.name}: $${el.price}`}
    <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
    ));

   return(<div>{listItems}</div>)
