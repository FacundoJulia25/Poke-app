import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHouse } from '../../redux/actions';


// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const house = useSelector(state=>state.house)
  useEffect(()=>getHouse(params.id),[])
    return (
        <div>
          House Detail
          {}
        </div>
    );
};
// const mapStateToProps = (state)=> {
//   return{
//     house: state.house
  
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     getHouse:(id)=>dispatch(getHouse(id))
//   }
// }
export default HouseDetail;
