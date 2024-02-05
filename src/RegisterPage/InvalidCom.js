function InvalidCom(props) {
  return props.errors ? (
    <div className="invalid">{props.errors}</div>
  ) : null;
}

export default InvalidCom;
