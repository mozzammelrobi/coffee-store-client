import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee , coffees, setCoffee }) => {
    const { _id, name, quantity, supplier, test,  photoURL } = coffee

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)

                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaning = coffees.filter(cof => cof._id !== _id)
                            setCoffee(remaning)

                        }
                    })
            }
        });

    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="flex justify-between items-center w-full pr-4">
                <div className="ml-4">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{test}</p>
                </div>
                <div className="join join-vertical space-y-4 ">
                    <button className="btn ">View</button>
                    <Link to={`/updateCoffe/${_id}`}>
                        <button className="btn ">Edit</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn ">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;