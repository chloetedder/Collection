export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// actions that end in "_SUCCESS" are assumed to have been the result of a completed
// api call but since we are doing an optimistic delete we are hiding the loading
// state that is why we left off '_SUCCESS' ... if it had that on the end then
// our apiCallsInProgress counter would be decremented below zero bc we never increment
// the number of apiCallsInProgress for the delete request
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
