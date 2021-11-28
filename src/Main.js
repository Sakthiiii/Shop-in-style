import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const main = () => {
    const brand = [{ name: " Fancy Product", price: "$40.00 - $80.00",Primary:"View Option" },
    { name: " Special Item", price: "$20.00 $18.00", Primary:"Add to Cart" },
    { name: " Sale Item", price: "$50.00 $25.00",Primary:"Add to Cart" },
    { name: " Popular Item", price: "$40.00" ,Primary:"Add to Cart"},
    { name: " Sale Item", price: "$50.00 $25.00",Primary:"Add to Cart" },
    { name: " Fancy Product", price: "$$120.00 - $280.00" ,Primary:"View Option"},
    { name: " Special Item", price: "$$20.00 $18.00",Primary:"Add to Cart" },
    { name: " Special Item", price: "$40.00" ,Primary:"Add to Cart "} ,]

    
  return (
    <div className="Card">

      {brand.map((brand, index) => (
        <Create
          key={index}
          name={brand.name}
          price={brand.price}
          Primary={brand.Primary}

        />
      ))}
     <Create />

    </div>
  )
}

function Create(props) {

  return (
   <Card  >
      <div >
        <div className="cad">
          <p className="name">{props.name}</p>
      

          <p className="price">{props.price}</p>

         <Button> <p className="Primary">{props.Primary}</p> </Button>
         
        </div>
      </div>
      </Card>
  )

}

 function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating className="half-rating" defaultValue={5} precision={0.5} />
      
    </Stack>
  );
}

export default main;
