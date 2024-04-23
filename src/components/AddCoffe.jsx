import Swal from 'sweetalert2'
import Navbar from './Navbar';

const AddCoffe = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const test = e.target.test.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photoURL = e.target.photo.value;

        const addCoffee = { name, quantity, supplier, test, category, details, photoURL }
        console.log(addCoffee)

        // sent data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h2>Add a Coffee</h2>

            <form onSubmit={handleAddCoffee} >
                <div className=" bg-[#F4F3F0] p-24">
                    {/* form name and quantity */}
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">coffee name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="coffe name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="quentity" className="input input-bordered w-full ml-4" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and test */}
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="test" placeholder="test" className="input input-bordered w-full ml-4" />
                            </label>
                        </div>
                    </div>

                    {/* form category and details */}
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="detaisl" className="input input-bordered w-full ml-4" />
                            </label>
                        </div>
                    </div>
                    {/* form photo url*/}
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold">photo url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffe;