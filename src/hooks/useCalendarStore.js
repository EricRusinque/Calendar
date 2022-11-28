import { useDispatch, useSelector } from "react-redux"
import { onAddnNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state =>  state.calendar );


    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ));
    }

    
    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        //  Todo bien

        if( calendarEvent._id ) {
            //Actualizandod
            dispatch( onUpdateEvent({ ...calendarEvent }))
        } else {
        // creando
            dispatch( onAddnNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
            
        }

    }

    const startDeletingEvent = () => {
        // TODO: llegar al backend
        dispatch( onDeleteEvent())
    }
    return {
        //Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }
}