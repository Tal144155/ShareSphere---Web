function InvalidCom(props) {

  //this component will be visible only if the user entered wrong user name\password
  return props.errors ? (
    <div className="invalid">{props.errors}</div>
  ) : null;
}

export default InvalidCom;
