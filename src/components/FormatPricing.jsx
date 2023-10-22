const PriceFormatter = ({ price }) => {
    return  Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  
  };
  
  export default PriceFormatter;