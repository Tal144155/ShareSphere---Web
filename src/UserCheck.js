

function UserCheck(props) {
    const list = props.usersList.filter((user) => user.user_name===props.user_name && user.password===props.password);
  console.log("----------");
}

export default UserCheck;
