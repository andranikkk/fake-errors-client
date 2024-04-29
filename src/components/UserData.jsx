import React from "react";

const UserData = ({ users }) => {
  // const maria = [
  //   {
  //     number: 1,
  //     index: 0,
  //     userName: "Maria",
  //     address: "Austria, Francisco Chang",
  //     phone: "+123 89 78 987",
  //   },
  // ];

  // function generateError(str, errorRate) {
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   let zeroCounter = 0;

  //   while (zeroCounter < errorRate) {
  //     let errorType = Math.random().toFixed(2);
  //     let randomChar = characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //     if (errorType < 0.33) {
  //       let randomIndex = Math.floor(Math.random() * str.length);

  //       str = str.slice(0, randomIndex) + str.slice(randomIndex + 1);
  //     } else if (errorType < 0.66) {
  //       let randomIndex = Math.floor(Math.random() * str.length);

  //       str = str.slice(0, randomIndex) + randomChar + str.slice(randomIndex);
  //     } else {
  //       let randomIndex = Math.floor(Math.random() * (str.length - 1));

  //       str =
  //         str.slice(0, randomIndex) +
  //         str[randomIndex + 1] +
  //         str[randomIndex] +
  //         str.slice(randomIndex + 2);
  //     }
  //     zeroCounter += 1;
  //   }

  //   return str;
  // }

  // console.log(generateError("(реалистично!)", 0.5));
  console.log(
    users.length > 0 && [
      ...Object.keys(users[0]),
      ...users.map((e) => Object.values(e)),
    ]
  );

  return (
    <table className="mother-table">
      <tbody>
        <tr>
          <th>№</th>
          <th>ID</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        {users.map((user) => (
          <tr key={user.index}>
            <td>{user.index}</td>
            <td>{user.identifier}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserData;
