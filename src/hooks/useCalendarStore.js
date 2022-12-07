import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onAddnNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state =>  state.calendar );
    const { user } = useSelector( state =>  state.auth );


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
            const { data } = await calendarApi.post('/events', calendarEvent)
            console.log({data })
            
            dispatch( onAddnNewEvent({ ...calendarEvent, id: data.evento._id, user }))
            
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