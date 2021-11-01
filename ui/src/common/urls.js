/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

const domain = 'http://167.172.7.66:8448';

const useURL = () => {
  const API_URL = {
    LOGIN_URL: `${domain}/user/userLogin`,
    ADD_USER_URL: `${domain}/user/addUser`,
    ADD_PRODUCT_URL: `${domain}/product/addProduct`,
    EDIT_PRODUCT_URL: `${domain}/product/editProduct`,
    PRODUCT_LIST_URL: `${domain}/product/getProductList`,
    PRODUCT_DETAIL_URL: `${domain}/product/getProduct`,
    TRANSACTION_LIST_URL: `${domain}/transaction/getTransactionList`,
    TRANSACTION_DETAIL_URL: `${domain}/transaction/getTransaction`,
    ADD_TRANSACTION_URL: `${domain}/transaction/addTransaction`,
    USER_LIST_URL: `${domain}/user/getUserList`,
  };
  return API_URL;
}
export default useURL;
