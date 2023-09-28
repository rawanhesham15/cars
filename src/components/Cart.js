// Cart.js
import React from "react";
import "./NavBarStyle.css"

function Cart({ cart, onItemRemove, removeAll, setCart, updateCarQuantity, carQuantities }) {
  const [state, setState] = React.useState(false);

  function handleClick() {
    setState((prevState) => !prevState);
  }

  function handleRemove(item) {
    onItemRemove(item);
  }

  function handleIncrement(item) {
    updateCarQuantity(item, ++carQuantities[`${item}`])
    const index = cart.findIndex((cartItem) => cartItem.car.name === item);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity = carQuantities[`${item}`];
      setCart(updatedCart);
    }
  }

  function handleDecrement(item) {
    updateCarQuantity(item, --carQuantities[`${item}`])
    const index = cart.findIndex((cartItem) => cartItem.car.name === item);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity = carQuantities[`${item}`];
      updateCarQuantity(item, updatedCart[index].quantity)
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  }

  function removeAlItems(){
    removeAll();
  }

  return (
    <div>
      <div className="shopping-cart-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none" className="ms-2 shopping-cart-image" onClick={handleClick}>
        <path d="M1.72583 0.306648C1.02618 0.48398 0.670678 1.27481 1.01105 1.89883C1.12829 2.1144 1.25687 2.23542 1.49513 2.364C1.64641 2.4472 1.67666 2.4472 3.45037 2.45855L5.25434 2.46989L5.39048 2.85565C5.46234 3.06743 5.75355 3.88811 6.03341 4.67852C6.31327 5.46894 6.77466 6.76991 7.0583 7.57167C7.34194 8.37344 7.72392 9.45128 7.90923 9.97318C8.09454 10.4913 8.52189 11.6939 8.8547 12.6394C9.19129 13.5849 9.6073 14.7611 9.78127 15.2489C9.95523 15.7368 10.2464 16.5537 10.4242 17.0642C10.6057 17.5748 10.9385 18.5165 11.1692 19.1632C11.3961 19.8061 11.7705 20.865 12.0012 21.5155L12.4172 22.6917L12.2622 23.1039C12.179 23.3271 11.9332 23.9927 11.7176 24.5751C11.2713 25.7702 11.2297 25.929 11.2297 26.4207C11.2297 26.8518 11.3129 27.1959 11.5058 27.5968C11.9067 28.4251 12.8711 29.0529 13.7371 29.0529C13.8392 29.0529 13.9224 29.0604 13.9224 29.0718C13.9224 29.0831 13.8657 29.2079 13.7939 29.3478C13.3211 30.2933 13.2077 31.322 13.4686 32.3166C13.983 34.2794 15.9004 35.6182 17.8972 35.4102C19.3722 35.2552 20.5937 34.4042 21.2442 33.0806C21.8115 31.9195 21.8115 30.5807 21.2442 29.4235C21.1534 29.2419 21.0891 29.0831 21.1005 29.0718C21.1307 29.0415 29.4887 29.0491 29.5152 29.0793C29.5303 29.0907 29.5152 29.1436 29.4812 29.1928C29.3601 29.3819 29.1559 29.9151 29.0652 30.282C28.8307 31.2501 28.9404 32.2145 29.3904 33.1184C30.2791 34.911 32.3441 35.8224 34.2615 35.2703C36.1827 34.7181 37.4685 32.8234 37.2643 30.8568C37.2076 30.316 37.1093 29.9605 36.8786 29.4802C36.7802 29.2684 36.7046 29.0869 36.7197 29.0755C36.7311 29.0642 37.6349 29.0529 38.7279 29.0529C39.9759 29.0529 40.7701 29.0377 40.8571 29.015C40.9328 28.9923 41.0802 28.9091 41.1861 28.8259C41.7307 28.3948 41.727 27.5363 41.1748 27.1203C41.0765 27.0447 40.929 26.9615 40.8496 26.9388C40.7437 26.9085 37.1735 26.8972 27.3066 26.8972C18.2943 26.8972 13.8582 26.8858 13.7636 26.8594C13.6048 26.814 13.4497 26.6476 13.4119 26.4887C13.3892 26.3866 13.6048 25.7664 14.2779 23.9662L14.3801 23.7015L15.6546 23.5388C16.3542 23.4519 18.8087 23.1417 21.108 22.8543C27.7717 22.011 32.7223 21.3907 34.496 21.1676C35.3998 21.0504 36.2772 20.9256 36.4436 20.8802C37.1168 20.7062 37.8127 20.2902 38.3308 19.7456C38.8414 19.2086 39.178 18.5921 39.3481 17.8849L39.4313 17.537V11.051V4.56507L39.3481 4.41001C39.2196 4.17175 39.0985 4.04316 38.8754 3.92214L38.675 3.80869L23.3545 3.79734L8.03403 3.78978L7.99621 3.66497C7.91301 3.41537 7.07343 1.05547 7.02426 0.934444C6.94484 0.74913 6.71037 0.507088 6.4948 0.393631L6.30192 0.291519L4.0706 0.283958C2.84527 0.280174 1.79012 0.291519 1.72583 0.306648ZM37.2567 11.607C37.2567 16.1868 37.2454 17.2685 37.2038 17.4235C37.0412 18.0324 36.5495 18.5505 35.952 18.7434C35.8499 18.7774 34.0686 19.0157 31.9999 19.2766C29.9312 19.5338 26.6788 19.9423 24.7765 20.1843C18.0523 21.0314 14.3876 21.4891 14.3536 21.4891C14.312 21.4891 14.3195 21.5117 12.9013 17.4992C12.7198 16.9773 12.334 15.8994 12.0504 15.0977C11.5398 13.6567 11.086 12.3822 10.2427 9.99209C10.0006 9.31513 9.72832 8.53984 9.62999 8.27133C9.53166 7.99903 9.38795 7.59058 9.30853 7.36367C9.22911 7.13297 9.08918 6.73209 8.99463 6.46358L8.82066 5.98328H23.0368H37.2567V11.607ZM17.988 29.3365C18.6839 29.518 19.2587 30.1042 19.4251 30.7963C19.6861 31.9157 18.9486 33.0201 17.814 33.2129C16.5282 33.4285 15.3331 32.2523 15.5449 30.9816C15.7378 29.8054 16.8648 29.0453 17.988 29.3365ZM33.6034 29.3403C34.0989 29.4689 34.5829 29.8357 34.8288 30.2668C34.9725 30.5202 35.1011 30.993 35.1011 31.2615C35.0973 31.9952 34.6208 32.7364 33.9514 33.0428C33.3803 33.3075 32.8092 33.3037 32.2457 33.0238C31.5877 32.7024 31.1868 32.1011 31.1414 31.3787C31.1036 30.8039 31.3003 30.2895 31.7163 29.8697C32.2117 29.3667 32.9265 29.1663 33.6034 29.3403Z" fill="white"/>
        <path d="M14.327 9.13743C14.2098 9.1639 14.0396 9.23575 13.9488 9.29627C13.7597 9.42863 13.5631 9.70849 13.5026 9.92784C13.408 10.2833 13.5668 10.7826 13.8543 11.0284C14.1682 11.3007 13.2756 11.278 24.2431 11.278H34.1366L34.3295 11.1872C34.7795 10.9792 35.0367 10.4913 34.9459 10.0186C34.8514 9.51562 34.5299 9.2055 34.0118 9.1223C33.6601 9.06179 14.5993 9.0807 14.327 9.13743Z" fill="white"/>
        <path d="M17.0997 15.1998C16.869 15.283 16.5627 15.5931 16.4832 15.8314C16.4038 16.0658 16.4 16.3571 16.4795 16.584C16.5627 16.826 16.8236 17.1096 17.0694 17.2193L17.2699 17.3101H24.2286H31.1873L31.4028 17.2042C31.6373 17.0907 31.8037 16.9243 31.9323 16.6747C32.0495 16.4516 32.0495 15.9789 31.9361 15.7557C31.8037 15.5023 31.6713 15.3738 31.4255 15.2527L31.1948 15.1355L24.2323 15.1393C17.9922 15.1393 17.251 15.1468 17.0997 15.1998Z" fill="white"/>
        </svg>

        <div className="cart-count">{cart.length}</div>

        <div id="cart-list" className={state ? "#cart-list active" : "#cart-list"}>
          {cart.length === 0 ? ( <div className="no-items">No items in the cart!</div> ) : (
            <div className="cart">
              {cart.map((item) => (
                <div className="cart-item">
                  <div className="cart-item-details">
                    <div className="cart-item-class">{item.car.class}</div>
                    <div className="cart-item-name mb-3">{item.car.name}</div>
                    <div className="quantity-delete"> 
                      <div className="quantity-control me-1">
                        <button onClick={() => handleDecrement(item.car.name)}> - </button>
                        <span>{carQuantities[`${item.car.name}`] }</span>
                        <button onClick={() => handleIncrement(item.car.name)}> + </button>
                      </div>
                      <div className="cart-item-delete" onClick={() => handleRemove(item.car.name)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19 22" fill="none">
                        <path d="M5.94719 0.834932C5.83116 0.845957 5.74611 0.861707 5.65949 0.888482C5.27992 1.00556 4.94025 1.29378 4.68667 1.7143C4.6305 1.80722 4.53968 1.98992 4.49873 2.09387C4.40213 2.33642 4.33178 2.61257 4.29923 2.87349C4.27823 3.04096 4.27665 3.08086 4.27403 3.42578L4.2714 3.77123H3.21301C2.52579 3.77123 2.13205 3.77333 2.0911 3.777C1.8916 3.7938 1.70365 3.87098 1.54248 4.00065C1.49103 4.04213 1.39601 4.14083 1.35558 4.19438C1.24061 4.34715 1.15556 4.54402 1.12511 4.72777C1.12091 4.75454 1.11566 4.78447 1.11408 4.79339L1.11146 4.81072H0.639488H0.166992V5.35934V5.90796H9.15228H18.1376V5.35934V4.81072H17.5102H16.8834L16.8802 4.79339C16.8786 4.78447 16.875 4.75979 16.8718 4.73985C16.8445 4.55452 16.7589 4.35502 16.6382 4.1928C16.5999 4.14135 16.5043 4.04265 16.4523 4.00065C16.2912 3.87045 16.1011 3.79275 15.9027 3.77648C15.8649 3.77333 15.4081 3.77123 14.7293 3.77123H13.6174V3.46463C13.6174 3.29558 13.6147 3.12181 13.6121 3.07719C13.5691 2.44562 13.3633 1.88072 13.0199 1.4497C12.9527 1.36518 12.8115 1.2229 12.7327 1.1599C12.5164 0.987181 12.2933 0.886907 12.0293 0.842807C11.981 0.834932 11.7494 0.833882 8.97116 0.833357C7.31795 0.833357 5.95716 0.833882 5.94719 0.834932ZM11.9001 2.29074C11.9962 2.30072 12.0823 2.33222 12.1679 2.38892C12.2251 2.42672 12.3222 2.52384 12.3695 2.58999C12.4445 2.69551 12.5164 2.86404 12.5485 3.00999C12.5758 3.13284 12.5789 3.18061 12.5815 3.48616L12.5842 3.77123H8.94753H5.31142L5.31352 3.46516C5.31562 3.14176 5.31719 3.12076 5.34397 3.00474C5.43689 2.60364 5.68836 2.32224 5.98236 2.29127C6.04536 2.28444 11.8355 2.28444 11.9001 2.29074Z" fill="#2C2A2A"/>
                        <path d="M0.166992 6.91854V7.23616H0.193242H0.219492V7.49341V7.75066L0.648413 7.75171L1.07786 7.75328L1.10201 7.91078C1.11566 7.99741 1.13981 8.15228 1.15608 8.25465C1.35558 9.53039 1.46898 10.2554 1.48998 10.3914C1.50415 10.4822 1.5724 10.9195 1.6417 11.3626C1.87638 12.8641 2.12417 14.447 2.34257 15.8461C2.46227 16.6126 2.61137 17.566 2.67384 17.9644C2.92847 19.5924 3.14581 20.9842 3.17521 21.1737C3.19254 21.284 3.21039 21.3963 3.21459 21.4231C3.21879 21.4499 3.22246 21.473 3.22246 21.4751C3.22246 21.4777 5.85426 21.4793 9.07091 21.4793C12.2876 21.4793 14.9194 21.4782 14.9194 21.4772C14.9194 21.4751 14.9482 21.2997 15.0427 20.7233C15.0643 20.592 15.1162 20.2755 15.1582 20.0198C15.2774 19.2921 15.2931 19.1966 15.3598 18.7913C15.4564 18.2038 15.5866 17.4111 15.6963 16.7412C15.7515 16.4063 15.8281 15.9385 15.867 15.7017C15.9058 15.4649 15.983 14.9972 16.0376 14.6622C16.0927 14.3273 16.1694 13.8595 16.2082 13.6227C16.2471 13.386 16.3143 12.977 16.3573 12.7145C16.4004 12.4515 16.4807 11.9627 16.5358 11.6277C16.5909 11.2928 16.6629 10.8534 16.6959 10.6513C16.8251 9.86376 16.8429 9.75456 16.8886 9.47789C16.9143 9.32039 16.9569 9.06315 16.9826 8.90565C17.0918 8.23785 17.1616 7.81471 17.1669 7.78373L17.1726 7.75066H17.6551H18.1376V7.17579V6.60092H9.15228H0.166992V6.91854ZM5.79021 8.10241C6.02069 8.12498 6.22753 8.2347 6.38608 8.41898C6.45171 8.49563 6.49213 8.55705 6.53781 8.65102C6.59136 8.76075 6.61761 8.8416 6.64176 8.97127L6.65331 9.03427L6.65488 13.8301C6.65593 17.2662 6.65488 18.6422 6.65068 18.6837C6.62863 18.9042 6.54148 19.1231 6.41023 19.2853C6.36088 19.3467 6.26428 19.436 6.20286 19.478C6.09576 19.551 5.97606 19.6003 5.85584 19.6208C5.76869 19.6355 5.59124 19.636 5.50514 19.6213C5.21272 19.5709 4.95757 19.3667 4.81635 19.0696C4.7691 18.9698 4.73865 18.8701 4.71502 18.7383C4.70662 18.6921 4.7061 18.3718 4.70452 13.9167C4.70295 10.5767 4.704 9.12352 4.7082 9.07522C4.72447 8.8752 4.7859 8.68987 4.8888 8.5329C5.01532 8.34023 5.19329 8.20058 5.39437 8.13705C5.50672 8.10188 5.65267 8.08876 5.79021 8.10241ZM9.22841 8.10241C9.38066 8.11815 9.52818 8.17328 9.64788 8.25885C9.74868 8.33025 9.8605 8.45153 9.92717 8.55968C10.0148 8.70405 10.0747 8.8899 10.0894 9.06577C10.0936 9.1146 10.0946 10.4932 10.0936 13.9089C10.092 18.3855 10.091 18.6868 10.0826 18.7378C10.0463 18.9562 9.96235 19.1478 9.83635 19.2979C9.68883 19.4743 9.50035 19.5856 9.28931 19.6218C9.23313 19.6313 9.21056 19.6323 9.09191 19.6297C8.97221 19.6276 8.95226 19.626 8.90291 19.614C8.82626 19.5956 8.78951 19.5825 8.71549 19.5473C8.60891 19.4964 8.53226 19.4402 8.44301 19.3467C8.28079 19.1761 8.17894 18.953 8.14954 18.7031C8.14272 18.6448 8.14167 18.0511 8.14167 13.869C8.14167 10.5935 8.14324 9.08415 8.14692 9.04687C8.18839 8.63842 8.43829 8.28668 8.78164 8.15438C8.83781 8.13285 8.93913 8.10818 8.99478 8.10293C9.06198 8.09663 9.17013 8.09663 9.22841 8.10241ZM12.7459 8.10241C13.0204 8.13075 13.2619 8.28405 13.4242 8.5329C13.5055 8.6568 13.5559 8.7849 13.5927 8.96077L13.6037 9.01327L13.6053 13.8327C13.6069 18.2532 13.6063 18.658 13.5985 18.7204C13.5481 19.1252 13.285 19.4706 12.9364 19.5888C12.843 19.6208 12.802 19.6271 12.6655 19.6297C12.5243 19.6329 12.4734 19.6281 12.3826 19.6045C12.0361 19.5137 11.761 19.1992 11.6801 18.8023C11.6749 18.7745 11.667 18.7294 11.6633 18.7021C11.6534 18.6275 11.6534 9.1125 11.6633 9.03165C11.6733 8.955 11.6933 8.86102 11.7143 8.79855C11.8413 8.41163 12.1516 8.14073 12.5128 8.10293C12.5721 8.09663 12.6876 8.09663 12.7459 8.10241Z" fill="#2C2A2A"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img
                    src={item.car.image}
                    alt={item.car.name}
                    className="cart-item-image"
                  />
                </div>
              ))}
                <div className="delete-btn">
                    <button onClick={removeAlItems}> Delete All <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 19 22" fill="white" className="ms-2">
                    <path d="M5.94719 0.834932C5.83116 0.845957 5.74611 0.861707 5.65949 0.888482C5.27992 1.00556 4.94025 1.29378 4.68667 1.7143C4.6305 1.80722 4.53968 1.98992 4.49873 2.09387C4.40213 2.33642 4.33178 2.61257 4.29923 2.87349C4.27823 3.04096 4.27665 3.08086 4.27403 3.42578L4.2714 3.77123H3.21301C2.52579 3.77123 2.13205 3.77333 2.0911 3.777C1.8916 3.7938 1.70365 3.87098 1.54248 4.00065C1.49103 4.04213 1.39601 4.14083 1.35558 4.19438C1.24061 4.34715 1.15556 4.54402 1.12511 4.72777C1.12091 4.75454 1.11566 4.78447 1.11408 4.79339L1.11146 4.81072H0.639488H0.166992V5.35934V5.90796H9.15228H18.1376V5.35934V4.81072H17.5102H16.8834L16.8802 4.79339C16.8786 4.78447 16.875 4.75979 16.8718 4.73985C16.8445 4.55452 16.7589 4.35502 16.6382 4.1928C16.5999 4.14135 16.5043 4.04265 16.4523 4.00065C16.2912 3.87045 16.1011 3.79275 15.9027 3.77648C15.8649 3.77333 15.4081 3.77123 14.7293 3.77123H13.6174V3.46463C13.6174 3.29558 13.6147 3.12181 13.6121 3.07719C13.5691 2.44562 13.3633 1.88072 13.0199 1.4497C12.9527 1.36518 12.8115 1.2229 12.7327 1.1599C12.5164 0.987181 12.2933 0.886907 12.0293 0.842807C11.981 0.834932 11.7494 0.833882 8.97116 0.833357C7.31795 0.833357 5.95716 0.833882 5.94719 0.834932ZM11.9001 2.29074C11.9962 2.30072 12.0823 2.33222 12.1679 2.38892C12.2251 2.42672 12.3222 2.52384 12.3695 2.58999C12.4445 2.69551 12.5164 2.86404 12.5485 3.00999C12.5758 3.13284 12.5789 3.18061 12.5815 3.48616L12.5842 3.77123H8.94753H5.31142L5.31352 3.46516C5.31562 3.14176 5.31719 3.12076 5.34397 3.00474C5.43689 2.60364 5.68836 2.32224 5.98236 2.29127C6.04536 2.28444 11.8355 2.28444 11.9001 2.29074Z" fill="white"/>
                    <path d="M0.166992 6.91854V7.23616H0.193242H0.219492V7.49341V7.75066L0.648413 7.75171L1.07786 7.75328L1.10201 7.91078C1.11566 7.99741 1.13981 8.15228 1.15608 8.25465C1.35558 9.53039 1.46898 10.2554 1.48998 10.3914C1.50415 10.4822 1.5724 10.9195 1.6417 11.3626C1.87638 12.8641 2.12417 14.447 2.34257 15.8461C2.46227 16.6126 2.61137 17.566 2.67384 17.9644C2.92847 19.5924 3.14581 20.9842 3.17521 21.1737C3.19254 21.284 3.21039 21.3963 3.21459 21.4231C3.21879 21.4499 3.22246 21.473 3.22246 21.4751C3.22246 21.4777 5.85426 21.4793 9.07091 21.4793C12.2876 21.4793 14.9194 21.4782 14.9194 21.4772C14.9194 21.4751 14.9482 21.2997 15.0427 20.7233C15.0643 20.592 15.1162 20.2755 15.1582 20.0198C15.2774 19.2921 15.2931 19.1966 15.3598 18.7913C15.4564 18.2038 15.5866 17.4111 15.6963 16.7412C15.7515 16.4063 15.8281 15.9385 15.867 15.7017C15.9058 15.4649 15.983 14.9972 16.0376 14.6622C16.0927 14.3273 16.1694 13.8595 16.2082 13.6227C16.2471 13.386 16.3143 12.977 16.3573 12.7145C16.4004 12.4515 16.4807 11.9627 16.5358 11.6277C16.5909 11.2928 16.6629 10.8534 16.6959 10.6513C16.8251 9.86376 16.8429 9.75456 16.8886 9.47789C16.9143 9.32039 16.9569 9.06315 16.9826 8.90565C17.0918 8.23785 17.1616 7.81471 17.1669 7.78373L17.1726 7.75066H17.6551H18.1376V7.17579V6.60092H9.15228H0.166992V6.91854ZM5.79021 8.10241C6.02069 8.12498 6.22753 8.2347 6.38608 8.41898C6.45171 8.49563 6.49213 8.55705 6.53781 8.65102C6.59136 8.76075 6.61761 8.8416 6.64176 8.97127L6.65331 9.03427L6.65488 13.8301C6.65593 17.2662 6.65488 18.6422 6.65068 18.6837C6.62863 18.9042 6.54148 19.1231 6.41023 19.2853C6.36088 19.3467 6.26428 19.436 6.20286 19.478C6.09576 19.551 5.97606 19.6003 5.85584 19.6208C5.76869 19.6355 5.59124 19.636 5.50514 19.6213C5.21272 19.5709 4.95757 19.3667 4.81635 19.0696C4.7691 18.9698 4.73865 18.8701 4.71502 18.7383C4.70662 18.6921 4.7061 18.3718 4.70452 13.9167C4.70295 10.5767 4.704 9.12352 4.7082 9.07522C4.72447 8.8752 4.7859 8.68987 4.8888 8.5329C5.01532 8.34023 5.19329 8.20058 5.39437 8.13705C5.50672 8.10188 5.65267 8.08876 5.79021 8.10241ZM9.22841 8.10241C9.38066 8.11815 9.52818 8.17328 9.64788 8.25885C9.74868 8.33025 9.8605 8.45153 9.92717 8.55968C10.0148 8.70405 10.0747 8.8899 10.0894 9.06577C10.0936 9.1146 10.0946 10.4932 10.0936 13.9089C10.092 18.3855 10.091 18.6868 10.0826 18.7378C10.0463 18.9562 9.96235 19.1478 9.83635 19.2979C9.68883 19.4743 9.50035 19.5856 9.28931 19.6218C9.23313 19.6313 9.21056 19.6323 9.09191 19.6297C8.97221 19.6276 8.95226 19.626 8.90291 19.614C8.82626 19.5956 8.78951 19.5825 8.71549 19.5473C8.60891 19.4964 8.53226 19.4402 8.44301 19.3467C8.28079 19.1761 8.17894 18.953 8.14954 18.7031C8.14272 18.6448 8.14167 18.0511 8.14167 13.869C8.14167 10.5935 8.14324 9.08415 8.14692 9.04687C8.18839 8.63842 8.43829 8.28668 8.78164 8.15438C8.83781 8.13285 8.93913 8.10818 8.99478 8.10293C9.06198 8.09663 9.17013 8.09663 9.22841 8.10241ZM12.7459 8.10241C13.0204 8.13075 13.2619 8.28405 13.4242 8.5329C13.5055 8.6568 13.5559 8.7849 13.5927 8.96077L13.6037 9.01327L13.6053 13.8327C13.6069 18.2532 13.6063 18.658 13.5985 18.7204C13.5481 19.1252 13.285 19.4706 12.9364 19.5888C12.843 19.6208 12.802 19.6271 12.6655 19.6297C12.5243 19.6329 12.4734 19.6281 12.3826 19.6045C12.0361 19.5137 11.761 19.1992 11.6801 18.8023C11.6749 18.7745 11.667 18.7294 11.6633 18.7021C11.6534 18.6275 11.6534 9.1125 11.6633 9.03165C11.6733 8.955 11.6933 8.86102 11.7143 8.79855C11.8413 8.41163 12.1516 8.14073 12.5128 8.10293C12.5721 8.09663 12.6876 8.09663 12.7459 8.10241Z" fill="white"/>
                    </svg></button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;