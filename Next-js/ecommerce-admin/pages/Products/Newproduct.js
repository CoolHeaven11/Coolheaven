import Layout from "@/Components/Layout";

export default function Newproduct() {
    return (
        <Layout>
            <h1 className="font-bold">New Product</h1>
        <div className="flex flex-col">
            <label>Product Name</label>
       <input type="text" name="name" placeholder="Product name" />
       <label>Product Description</label>
      <textarea placeholder="Description" />
      <label>Price (in USD)</label>
      <input type="text" name="name" placeholder="Price" />
        </div>
        <button type="submit">Save</button>
        </Layout>
    )
}