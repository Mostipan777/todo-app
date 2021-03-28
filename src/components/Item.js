function Item(props) {
  return (
    <li className="collection-item">
      <div className="right">
        <a
          className="custom-btn waves-effect waves-light btn-small green darken-1"
          onClick={() => props.makeImportant(props.id)}
        >
          <i className="material-icons">alarm</i>
        </a>
      </div>
      <div className="right">
        <a
          className="custom-btn waves-effect waves-light btn-small red darken-3"
          onClick={() => props.deleteItem(props.id)}
        >
          <i className="material-icons">delete</i>
        </a>
      </div>
      <label>
        <input type="checkbox" onChange={() => props.makeDone(props.id)}/>
        <span>{props.done ? <span style={{textDecoration: "line-through"}}>{props.label}</span> : props.important ? <strong style={{color: "black"}}>{props.label}</strong> : props.label}</span>
      </label>
    </li>
  );
}

export default Item;
// {props.inportant}
