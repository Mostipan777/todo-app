import React from 'react';
import Items from '../components/Items';
import Search from '../components/Search';
import Add from '../components/Add';

class Main extends React.Component {
  state = {
    items: [
      { id: 1, label: 'Create App', done: false, important: false },
      { id: 2, label: 'Create Coffe', done: false, important: false },
      { id: 3, label: 'Create App 2', done: false, important: false },
    ],
    search: '',
  };

  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter((el) => el.id !== id) });
  };

  makeImportant = (id) => {
    const idx = this.state.items.findIndex((el) => el.id === id);
    const oldItem = this.state.items[idx];
    const value = !oldItem.important
    const newItem = {...oldItem, important:value}
    this.setState({
      items: [
        ...this.state.items.slice(0, idx),
        newItem,
        ...this.state.items.slice(idx + 1),
      ],
    });
  };

  makeDone = (id) => {
    const idx = this.state.items.findIndex((el) => el.id === id);
    const oldItem = this.state.items[idx];
    const value = !oldItem.done
    const newItem = {...oldItem, done:value}
    this.setState({
      items: [
        ...this.state.items.slice(0, idx),
        newItem,
        ...this.state.items.slice(idx + 1),
      ],
    });
  };

  searchItem = (str) => {
    return this.state.items.filter((el) => {
      return el.label.toLowerCase().includes(str);
    });
  };

  onSearchChange = (value) => {
    this.setState({ search: value });
  };

  createItem(label) {
    const key = new Date().valueOf();
    return {
      id: key,
      label,
      done: false,
      important: false,
    };
  }

  addItem = (label) => {
    this.setState({ items: [...this.state.items, this.createItem(label)] });
  };

  render() {
    const visibleItems = this.searchItem(this.state.search);
    return (
      <main className="content">
        <Search
          searchItem={this.searchItem}
          onSearchChange={this.onSearchChange}
        />
        <Items
          items={visibleItems}
          deleteItem={this.deleteItem}
          makeImportant={this.makeImportant}
          makeDone={this.makeDone}
        />
        <Add addItem={this.addItem} />
      </main>
    );
  }
}

export default Main;
