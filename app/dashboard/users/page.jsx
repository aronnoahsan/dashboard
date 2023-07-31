import styles from "@/styles/users.module.css";
import Image from "next/image";

function Users() {
  return (
    <div>
      <h1 className={styles.h1__style}>Users</h1>
      <div className={styles.user__table__holder}>
        <table className={styles.user__table}>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscriber</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <Image
                  src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_2.jpg"
                  width={50}
                  height={50}
                  alt="User Name"
                  className={styles.user__image}
                />
              </td>
              <td>Full Name</td>
              <td>email@email.com</td>
              <td>Paid</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
