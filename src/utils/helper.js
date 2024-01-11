export function filterProduct(searchText, actualData) {
    return actualData.filter(product => product?.name.toLowerCase().includes(searchText?.toLowerCase()));
    
  }