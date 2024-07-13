import { useEffect, useState } from "react";
import { BASE_URL } from "../../lib/constant";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function User() {
  const [users, setUser] = useState([]);
  const [UserDetails, setUserDetails] = useState({});
  const [showUserModal, setShowUserModal] = useState(false); //  User details modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); //  delete confirmation modal
  const [UserToDelete, setUserToDelete] = useState(null); //  User to delete

  useEffect(() => {
    fetch(`${BASE_URL}users/`).then((res) =>
      res.json().then((data) => {
        console.log("data users", data);
        setUser(data);
        // setUser(data.results);
        // console.log("data users: ", data.results);
      })
    );
  }, []);
  console.log("users", users);

  // handle view UserDetails
  const handleUserDetails = (User) => {
    setUserDetails(User);
    setShowUserModal(true); // show User details modal
    console.log("UserDetails view", User);
  };

  // handle delete User
  const handleDeleteUser = (id) => {
    setUserToDelete(id); // set the User to delete
    console.log(id);
    setShowDeleteModal(true); // show delete confirm modal
  };

  // confirm delete User
  const confirmDeleteUser = () => {
    const newusers = users.filter((User) => User.id !== UserToDelete);
    setUser(newusers);
    setShowDeleteModal(false); // close delete confirm modal
    console.log("User deleted", UserToDelete);
  };

  // table columns
  const columns = [
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "creationAt",
      selector: (row) => row.creationAt,
    },

    {
      name: "Action",
      selector: (row) => (
        <div>
          <button
            onClick={() => handleUserDetails(row)}
            className="mr-4 text-lg"
          >
            View
          </button>
          <button
            onClick={() => handleDeleteUser(row.id)}
            className="text-xl text-red-700"
          >
            <MdDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="mt-14">
      <DataTable
        columns={columns}
        data={users}
        fixedHeader
        pagination
        pointerOnHover
        highlightOnHover
      />
      {/* User details modal */}
      <Modal show={showUserModal} onClose={() => setShowUserModal(false)}>
        <Modal.Header>User Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <img
                className="w-40 h-40 object-cover rounded-lg"
                src={
                  UserDetails?.avatar ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
                }
                alt="no images"
              />
            </div>
            <h2>{UserDetails?.name || "Unknown"}</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {UserDetails?.email}
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        show={showDeleteModal}
        size="md"
        onClose={() => setShowDeleteModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this User?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={confirmDeleteUser}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
