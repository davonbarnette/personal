
/* Consumer Imports */
import WorkConsumer from "../Work/Consumer";

/*
 * Use this file when you have a WebSocket that uses an event:message system. When an event like SOCKET_ACTIONS.example
 * is fired, the backend should respond with an event. Register that key in SOCKET_CALLBACKS for which callback you want.
 * This also depends on what routing method you're using - so check global/managers/EventRouter.ts to see which one
 * you're using.
 *
 */

export const SOCKET_ACTIONS: any = {

    /* Socket Actions */
    create_work: 'create_work',
    query_work: 'query_work',
    update_work: 'update_work',
    delete_work: 'delete_work',
};


export const SOCKET_CALLBACKS: any = {

    /* Socket Callbacks */
    create_work: WorkConsumer.onCreateOne,
    update_work: WorkConsumer.onUpdateOne,
    delete_work: WorkConsumer.onDeleteOne,
    query_work: WorkConsumer.onQueryOne,
};