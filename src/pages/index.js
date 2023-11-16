import Layout from "../components/layout";
import productCard from "../components/productCard";
 
export default function Home(){
 
    return(
       <Layout>

       <div>
  
 
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <productCard 
      price={200} 
      color="black"
      name="Basic Tee"
      image="/product1.jpg"
      ></productCard>
        <productCard 
      price={300} 
      color="Red"
      name= "Basic Tee 1"
      image="/product1.jpg"
      ></productCard>
      
      

    </div>
  </div>
</div>

      
       </div>
       </Layout>
    );
 }