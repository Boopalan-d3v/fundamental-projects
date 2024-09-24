import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import { nanoid } from 'nanoid'
import Items from './Items';
/*
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
return list ;
} 
*/

const getLocalStorage = JSON.parse(localStorage.getItem('list') || '[]')

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {

  const [items, setItems] = useState(getLocalStorage)

  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id:nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }

  const removeItem = (id) =>{
    const name = items.filter((item) => item.id !== id)
    setItems(name)
    setLocalStorage(name)
    toast.success('Item deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(itemId === item.id){
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item;
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  
  return(
    <section className='section-center'>
      <ToastContainer position='top-center'/>
      <Form addItem={addItem}/>
      <Items item={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  );
};

export default App;
