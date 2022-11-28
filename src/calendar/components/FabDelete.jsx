import { addHours } from 'date-fns';
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabDelete = () => {
    
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();


    const handleDelete = () => {
        startDeletingEvent();
    }
    return (
        <button
            className='btn btn-danger fab-delete'
            onClick={ handleDelete }
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
