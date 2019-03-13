import React from 'react';
import Category from './category';
import '../../../../assets/css/categories.css';
import SearchContainer from './../../widgets/containers/searchcontainer';

function Categories(props) {
    return (
        <div className="Categories">
        <SearchContainer />
            {
                props.categories.map(
                    (item)=> {
                        return <Category key={item.id} {...item} 
                        handleOpenModal={props.handleOpenModal}/>
                    }
                )
            }
        </div>
    );
}

export default Categories;