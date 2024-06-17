import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[] //criando tipo, estado do carrinho que é um array de itens do tipo Produto
}

const initialState: CarrinhoState = {
  itens: [] //estado inicial do carrinho que recebe um array de itens, inicialmente vazio
}

const carrinhoSlice = createSlice({
  name: 'carrinho', //nome do slice
  initialState, //estado inicial passado em forma de constante
  reducers: {
    //definindo quais reducers estarão disponíveis no slice de carrinho
    adicionar: (state, action: PayloadAction<Produto>) => {
      //ação de adicionar que é uma arrow function, ele recebe um estado e uma ação do tipo PayloadAction<Produto>
      const produto = action.payload //criando a variável aonde ela atribui o payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Produto já foi adicionado!')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions //exportando a ação do carrinho de adicionar o produto
export default carrinhoSlice.reducer
