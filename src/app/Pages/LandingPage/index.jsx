import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_CARD } from '../../../Redux/Reducer/CartReducer'
import Layout from '../../Layouts/Layout'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Banner from '../../Shared/Components/GloabalComponent/Banner';
const LandingPage = () => {
  const dispatch = useDispatch()
  return (
    <Layout Con={Banner}>
        
    </Layout>
  )
}

export default LandingPage