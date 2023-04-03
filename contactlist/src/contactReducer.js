const initialState = {
    contacts: [],
    maleCount: 0,
    femaleCount: 0,
    businessCount: 0,
    personalCount: 0
  };
  
  const contactReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
          maleCount: action.payload.gender === "Male" ? state.maleCount + 1 : state.maleCount,
          femaleCount: action.payload.gender === "Female" ? state.femaleCount + 1 : state.femaleCount,
          businessCount: action.payload.type === "Business" ? state.businessCount + 1 : state.businessCount,
          personalCount: action.payload.type === "Personal" ? state.personalCount + 1 : state.personalCount
        };
      case "DELETE_CONTACT":
   
        return {

          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload),
          maleCount: state.contacts.filter(contact => contact.id == action.payload)[0].gender === "Male" ? state.maleCount - 1 : state.maleCount,
          femaleCount: state.contacts.filter(contact => contact.id == action.payload)[0].gender === "Female" ? state.femaleCount - 1 : state.femaleCount,
          personalCount: state.contacts.filter(contact => contact.id == action.payload)[0].type === "Personal" ? state.personalCount - 1 : state.personalCount,
          businessCount: state.contacts.filter(contact => contact.id == action.payload)[0].type === "Business" ? state.businessCount - 1 : state.businessCount,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  