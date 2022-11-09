import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "../../components/FoodCard/FoodCard";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import "./CartPage.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundColor: '#00ff00',
  transform: 'translate(-50%, -50%)',
  width: 400,
  //bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartPage = () => {
  const [open, setOpen] = React.useState(false);
  var cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const handleOpen = () => {
    setOpen(true);
  }
    const handleClose = () => setOpen(false);
  

  function calcPrice() {
    var price = 0;
    cartItems.forEach((item) => {
      price += item.price;
    });

    return price;
  }

  return (
    <div className="cart-div">
      <h3>Cart</h3>
      <div>
        {cartItems.length === 0 ? (
          <div className="no-items">The cart is empty</div>
        ) : (
          cartItems.map((item) => {
            return (
              <FoodCard
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                tags={item.tags}
                price={item.price}
                isCart={true}
              />
            );
          })
        )}
      </div>
      {cartItems.length !== 0 && (
        <div className="cart-details">
          <div>
            <p>
              Total Items: <b>{cartItems.length}</b>
            </p>
            <p>
              Total Price: <b>Rs. {calcPrice()}</b>
            </p>
          </div>
          <button onClick={handleOpen}>Proceed to Pay</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{display: "flex", flexDirection: "row", alignItems:"center", gap:"10px"}}>
                  <TaskAltIcon /> <p>Payment Done</p>
              </Box>
           </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default CartPage;
