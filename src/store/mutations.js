export default{
    changeC(state,payload){
        console.log('state: ', state);
        console.log('payload: ', payload);
        state.city=payload
        try {
            localStorage.city=payload
        } catch(e){

        }
        
    }
}