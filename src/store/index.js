import { createStore } from 'vuex'
import { collection,doc, getDocs,deleteDoc,setDoc,getDoc } from "firebase/firestore";
import { db } from '../firebase';

export default createStore({
  state: {
    productList:[],
    productWishList: [],
    productEdit:{
      codigo : null,
      nome : null,
      descricao : null,
      preco : null,
      urlFoto : null,
      quantidade : 1,
    },
    quantidadeProdutos: 0,
    valorTotal: 0
  },

  mutations: {
    editarProduto(state,produto){
      state.productEdit = produto;
    },

    alteraTotal(state,preco){
      state.valorTotal =  preco;
    },
    alteraQuantidade(state,quantidade){

      state.quantidadeProdutos = quantidade
    },

    alteraTotalMinus(state,preco){
      state.valorTotal = state.valorTotal - preco;
    },

    alteraQuantidadeMinus(state,quantidade){
      state.quantidadeProdutos = state.quantidadeProdutos - quantidade
    },


    cleanProductList(state){
      state.productList = [];
    },

    cleanWishList(state){
      state.productWishList = [];
    }


  },
  actions: {
    
    async refreshProductList({commit}){
      commit('cleanProductList',)
      const querySnapshot =  await getDocs(collection(db, "produtos"));
      querySnapshot.forEach((doc) => {
        this.state.productList.push(doc.data())
      });
    },

    async refreshWishList({commit}){
      commit('cleanWishList')
      let total = 0;
      let quantidade = 0;
      const querySnapshot =  await getDocs(collection(db, "wishlist"));
      querySnapshot.forEach((doc) => {
        this.state.productWishList.push(doc.data())
        total = total + doc.data().quantidade * doc.data().preco
        quantidade = quantidade + doc.data().quantidade;
      });

      commit('alteraTotal',total)
      commit('alteraQuantidade',quantidade)
    },

    async deleteProductOnList({dispatch},codigo){
      await deleteDoc(doc(db, "produtos", codigo));
      await deleteDoc(doc(db, "wishlist", codigo));
      dispatch('refreshProductList')
      dispatch('refreshWishList')


    },

    async addProdutWishList({dispatch},product){

      await setDoc(doc(db, "produtos", product.codigo),{
        codigo: product.codigo,
        nome:product.nome,
        descricao:product.descricao,
        foto:product.foto,
        preco:product.preco,
        quantidade:product.quantidade - 1
      });

      const docSnap = await getDoc(doc(db, "wishlist", product.codigo));
      let quantidade = 0;

      if (docSnap.exists()) {
        quantidade = docSnap.data().quantidade
      } 

      await setDoc(doc(db, "wishlist", product.codigo),{
        codigo: product.codigo,
        nome:product.nome,
        descricao:product.descricao,
        foto:product.foto,
        preco:product.preco,
        quantidade:quantidade + 1
      });

      dispatch('refreshWishList')
      dispatch('refreshProductList')

    },

    async removeProdutWishList({dispatch},product){

      const docSnapProduct = await getDoc(doc(db, "produtos", product.codigo));
      const docSnapProductWish = await getDoc(doc(db, "wishlist", product.codigo));

      let quantidadeWishList = 0;
      let quantidadeProdutos = 0;

      if (docSnapProduct.exists()) {
        quantidadeProdutos = docSnapProduct.data().quantidade
      } 
      if (docSnapProductWish.exists()) {
        quantidadeWishList = docSnapProductWish.data().quantidade
      } 

      quantidadeProdutos = quantidadeProdutos + quantidadeWishList

      await setDoc(doc(db, "produtos", product.codigo),{
        codigo: product.codigo,
        nome:product.nome,
        descricao:product.descricao,
        foto:product.foto,
        preco:product.preco,
        quantidade:quantidadeProdutos
      });

      await deleteDoc(doc(db, "wishlist", product.codigo));
      
      dispatch('refreshWishList')
      dispatch('refreshProductList')
    }
  },

  modules: {
  },
  getters: {
  },
})
