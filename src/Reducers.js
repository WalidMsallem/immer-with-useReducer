import produce from "immer"
 

const reducerFunction =   (draft ,action ) => {
   
      switch(action.type) {
     
            case 'PLUS' : {
                draft.count ++
               break
              } 
 
            case 'MOIN' : {
                draft.count --
                break
              } 
        }
  } 
 export const countReducer = produce(reducerFunction)