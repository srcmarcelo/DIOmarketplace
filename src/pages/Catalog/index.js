/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';

import FloatingCart from '../../components/FloatingCart';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import Reactotron from 'reactotron-react-native';

export default function Catalog() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const {data} = await api.get('/products');

        setProducts(data);
      } catch (error) {
        Reactotron.log('Como assim bicho', error);
      }
    }
    loadProducts();
  }, []);

  function handlerAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => {
            return (
              <Product>
                <ProductImage source={{uri: item.image_url}} />
                <ProductTitle>{item.title}</ProductTitle>
                <PriceContainer>
                  <ProductPrice>{formatValue(item.price)}</ProductPrice>
                  <ProductButton onPress={() => handlerAddToCart(item.id)}>
                    <ProductButtonText>adicionar</ProductButtonText>
                    <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                  </ProductButton>
                </PriceContainer>
              </Product>
            );
          }}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
}
