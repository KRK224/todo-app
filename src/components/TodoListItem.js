import React, { useRef } from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, onRevising, onChange}) =>{
    const {id, text, checked, revising} = todo;

    
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} >
                {checked? <MdCheckBox onClick={()=>onToggle(id)} /> : <MdCheckBoxOutlineBlank onClick={()=>onToggle(id)} />}
                <div className={cn('text', {revising})} onDoubleClick={(e)=>{onRevising(id);}}>
                    {revising ? 
                        <input 
                            value={text} 
                            onChange={e=>onChange(e, id)} 
                            onKeyPress={(e)=>{
                                if(e.key ==='Enter'){
                                    onRevising(id);
                                }
                            }
                        }/> :text}
                </div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;