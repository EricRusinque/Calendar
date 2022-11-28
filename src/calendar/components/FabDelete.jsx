import { addHours } from 'date-fns';
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabDelete = () => {
    
    const { isDateModalOpen } = useUiStore();
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();


    const handleDelete = () => {
        startDeletingEvent();
    }
    return (
        <button
            className='btn btn-danger fab-delete'
            onClick={ handleDelete }
            style={{
                display: hasEventSelected && !isDateModalOpen ? '' : 'none'
            }}
        >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
