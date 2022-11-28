import { useDispatch, useSelector } from "react-redux"
import { onAddnNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";

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
            //Actualizando
        } else {
        // creando
            dispatch( onAddnNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
            
        }

    }

    return {
        //Propiedades
        events,
        activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent
    }
}