import Layout from "@/Components/Layout";
import Link from "next/link";

export default function Products(){
    return(
 <Layout >
<Link href={'/Products/Newproduct'} className="bg-blue-800 text-white pt-2  p-2 py-3 rounded-md">
Add New Product</Link>
 </Layout>
    )
}