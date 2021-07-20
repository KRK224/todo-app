import React, { useEffect, useRef } from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, onRevising, onChange}) =>{
    const {id, text, checked, revising} = todo;
    const inputRef = useRef(null);

    useEffect(()=>{
        if(revising){
            inputRef.current.focus();
        }
        
    },[revising])
    
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
                {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
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
                        }
                            ref={inputRef}
                        /> :text}
                </div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);