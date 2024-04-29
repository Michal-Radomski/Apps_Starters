// import { combineReducers } from "redux";

// import {
//   BUS_ID_LINE_NUMBER,
//   DEVIATION_REPORT,
//   DEVIATION_REPORT_MAP,
//   DISPATCH_MAP_VIEW,
//   FETCH_ACTIVE_ASSIGNMENTS_TO_BLOCKS,
//   FETCH_DATA_ACTIVE_BUS,
//   FETCH_LINE_SHAPE_STOPS,
//   GET_ACTIVE_BLOCKS,
//   GET_BUSES,
//   GET_ROUTES_LIST,
//   HISTORICAL_POSITIONS,
//   POSITION_TIME,
//   RESET_DATA_ACTIVE_BUS,
//   SET_ACTIVE_BUS,
//   SET_DIRECTION,
//   SET_LOADING_TABLE,
//   SHOW_ROUTES_TABLE,
//   SHOW_STOPS,
//   SET_ROUTE_MAP_RANGE,
//   SET_ROUTE_STOPS_BOTH,
//   TRIP_RAPORT_DATA,
//   GET_BLOCKS_IDS,
//   GET_ROUTES_DETAILS,
//   REVERSE_GEOCODING_DONE,
//   GET_LAST_24_HOURS_DATA,
//   SET_RANDOM_COLORS,
//   DISPATCH_VEHICLE_ID,
//   DISPATCH_CURRENT_ZOOM,
//   GET_CURRENT_SERVICE_ID,
//   GET_DOWNLOADABLE_TA_CONTENT,
//   GET_CREDENTIALS,
//   GET_SCHEDULE_DETAILS,
//   GET_ALL_CALENDARS,
//   DISPATCH_CURRENT_SHIFTS,
//   DISPATCH_APP_SETTINGS,
//   DISPATCH_PROGRESS_BAR_DATA,
//   GET_VEHICLE_SIRI_DATA,
//   DISPATCH_BLOCK_STATISTICS,
//   DISPATCH_ROUTES_TRIPS_DATA_PKS,
//   GET_CURRENT_CALENDAR_BLOCKS_IDS,
//   GET_TRIP_DATA,
//   RESET_TRIP_DATA,
//   GET_GTFS_RT_TRIP_UPDATES,
//   GET_AGENCY_ALERTS,
//   GET_BUSES_IDS,
// } from "./actionTypes";

// const initialState: RootState = {};

// // Reducers
// const getRoutesInfo = function (state = initialState, action: Dispatch) {
//   // console.log("action.payload:", action.payload);
//   switch (action.type) {
//     case GET_ROUTES_DETAILS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const getBuses = function (state = initialState, action: Dispatch) {
//   // console.log("action.payload:", action.payload);
//   switch (action.type) {
//     case GET_BUSES:
//       return { ...state, ...action.payload };
//     case SET_ACTIVE_BUS:
//       return { ...state, activeBus: action.payload };
//     case FETCH_DATA_ACTIVE_BUS:
//       return { ...state, activeBusData: action.payload };
//     case RESET_DATA_ACTIVE_BUS:
//       return { ...state, activeBusData: action.payload };
//     case GET_GTFS_RT_TRIP_UPDATES:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const getActiveBlocks = function (state = initialState, action: Dispatch) {
//   // console.log("action.payload:", action.payload);
//   switch (action.type) {
//     case GET_ACTIVE_BLOCKS:
//       return { ...state, ...action.payload };
//     case GET_VEHICLE_SIRI_DATA:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const getLineShapeStops = function (state = initialState, action: Dispatch) {
//   // console.log("action.payload:", action.payload);
//   switch (action.type) {
//     case FETCH_LINE_SHAPE_STOPS:
//       return { ...state, ...action.payload };
//     case SET_DIRECTION:
//       return { ...state, ...action.payload };
//     case SHOW_STOPS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const setMapView = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case DISPATCH_MAP_VIEW:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const historicalPositions = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case HISTORICAL_POSITIONS:
//       return { ...state, ...action.payload };
//     case BUS_ID_LINE_NUMBER:
//       return { ...state, ...action.payload };
//     case POSITION_TIME:
//       return { ...state, ...action.payload };
//     case SET_ROUTE_STOPS_BOTH:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const routesList = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_ROUTES_LIST:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const constantValues = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_BUSES_IDS:
//       return { ...state, ...action.payload };
//     case SET_LOADING_TABLE:
//       return { ...state, ...action.payload };
//     case SHOW_ROUTES_TABLE:
//       return { ...state, ...action.payload };
//     case REVERSE_GEOCODING_DONE:
//       return { ...state, ...action.payload };
//     case DISPATCH_CURRENT_ZOOM:
//       return { ...state, ...action.payload };
//     case GET_CURRENT_SERVICE_ID:
//       return { ...state, ...action.payload };
//     case GET_CURRENT_CALENDAR_BLOCKS_IDS:
//       return { ...state, ...action.payload };
//     case GET_DOWNLOADABLE_TA_CONTENT:
//       return { ...state, ...action.payload };
//     case GET_CREDENTIALS:
//       return { ...state, ...action.payload };
//     case GET_SCHEDULE_DETAILS:
//       return { ...state, ...action.payload };
//     case DISPATCH_CURRENT_SHIFTS:
//       return { ...state, ...action.payload };
//     case DISPATCH_APP_SETTINGS:
//       return { ...state, ...action.payload };
//     case DISPATCH_PROGRESS_BAR_DATA:
//       return { ...state, ...action.payload };
//     case DISPATCH_BLOCK_STATISTICS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const activeAssignments = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case FETCH_ACTIVE_ASSIGNMENTS_TO_BLOCKS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const deviationReportData = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case DEVIATION_REPORT:
//       return { ...state, ...action.payload };
//     case DEVIATION_REPORT_MAP:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const setRouteMapRange = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case SET_ROUTE_MAP_RANGE:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const tripsReportData = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case TRIP_RAPORT_DATA:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const blocksIdsList = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_BLOCKS_IDS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const last24HoursPositions = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_LAST_24_HOURS_DATA:
//       return { ...state, ...action.payload };
//     case SET_RANDOM_COLORS:
//       return { ...state, ...action.payload };
//     case DISPATCH_VEHICLE_ID:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const allBlocksTimeLine = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_ALL_CALENDARS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const additionalAgencyData = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case DISPATCH_ROUTES_TRIPS_DATA_PKS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// const currentTripData = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_TRIP_DATA:
//       return { ...state, ...action.payload };
//     case RESET_TRIP_DATA:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// //* Alerts
// const agencyAlerts = function (state = initialState, action: Dispatch) {
//   switch (action.type) {
//     case GET_AGENCY_ALERTS:
//       return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// // CombineReducer
// const rootReducer = combineReducers({
//   agencyAlerts: agencyAlerts,
//   currentTripData: currentTripData,
//   additionalAgencyData: additionalAgencyData,
//   allBlocksTimeLine: allBlocksTimeLine,
//   last24HoursPositions: last24HoursPositions,
//   routesInfo: getRoutesInfo,
//   tripsReportData: tripsReportData,
//   blocksIdsList: blocksIdsList,
//   routeMapRange: setRouteMapRange,
//   deviationReportData: deviationReportData,
//   activeAssignments: activeAssignments,
//   constantValues: constantValues,
//   routesList: routesList,
//   historicalPositions: historicalPositions,
//   mapView: setMapView,
//   lineShapeStops: getLineShapeStops,
//   buses: getBuses,
//   activeBlocks: getActiveBlocks,
// });

// export default rootReducer;
