import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.store.js"
import ProductCard from "../components/ProductCard.jsx";

import Demo from "../components/Demo.jsx"

const HomePage = () => {

  const {fetchProducts, products, loading} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

  if(loading){
	return <Demo></Demo>
  }
  else{
	return (

		<Container maxW='container.xl' py={12}>
		  
	
		<VStack spacing={8}>
					
			<Text
				fontSize={"25px"}
				fontWeight={"bold"}
				textTransform={"uppercase"}
				textAlign={"center"}
				bgGradient="to-r"
				gradientFrom="cyan.400"
				gradientTo="blue.500"
				bgClip={"text"}
				mb={"20px"}
			>
			  Current Products 🚀
			</Text>
	
			<SimpleGrid
						columns={{
							base: 1,
							md: 2,
							lg: 3,
						}}
						spacing={20}
			  gap="40px"
						w={"full"}
					>
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</SimpleGrid>
	
					{products.length === 0 && (
						<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
							No products found 😢{" "}
							<Link to={"/create"}>
								<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
									Create a product
								</Text>
							</Link>
						</Text>
					)}
					
				</VStack>
			</Container>
	  )
  }

  
}

export default HomePage
