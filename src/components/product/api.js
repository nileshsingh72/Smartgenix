export default function getApi(category, brand, min, max, sort, order, page, limit){
    let url = ''
    if (category) {
       url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}`
      if (brand) {
       url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}`
        if (min) {
          url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&min=${min}`
          if (sort) {
            url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&min=${min}&sort=${sort}&order=${order}`
          }
          if (max) {
             url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&min=${min}&max=${max}`
            if (sort) {
            url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&min=${min}&max=${max}&sort=${sort}&order=${order}`
            }
          }
        }
        if (max && !min) {
          url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&max=${max}`
            
          if (sort) {
            url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&max=${max}&sort=${sort}&order=${order}`
          }
        }
        if (sort && !min && !max) {
          url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&brand=${brand}&sort=${sort}&order=${order}`
        }
      } else {
        if (min) {
       url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&min=${min}`
          if (sort) {
           url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&min=${min}&sort=${sort}&order=${order}`
          }
          if (max) {
            url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&min=${min}&max=${max}`
            if (sort) {
              url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&min=${min}&max=${max}&sort=${sort}&order=${order}`
            }
          }
        }
        if (max && !min) {
          url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&max=${max}`
          if (sort) {
            url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&max=${max}&sort=${sort}&order=${order}`
          }
        }
        if (sort && !min && !max) {
          url = `https://cloudy-cyan-dragonfly.cyclic.app/product?category=${category}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`
        }
      }
    }

    return url;

}