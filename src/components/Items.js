import Item from './Item';

function Items(props) {
  return (
    <ul className="collection">
      {props.items.map((item) => (
        <Item
          key={item.id}
          {...item}
          deleteItem={props.deleteItem}
          makeImportant={props.makeImportant}
          makeDone={props.makeDone}
        />
      ))}
    </ul>
  );
}

export default Items;
